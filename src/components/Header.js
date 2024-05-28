/* eslint-disable react-hooks/exhaustive-deps */
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptChatSlice";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(store => store?.user)
    const showGptSearchView = useSelector(store => store.gpt.showGptSearch)

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())

    }

    const handleChangeLanguage = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                navigate('/error')
            });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL }))
                navigate('/browse');
            } else {

                dispatch(removeUser(null))
                navigate('/')

            }

        });
        // un subscribe when component will unmount;

        return () => unsubscribe();

    }, [])


    return (

        <div className={`flex w-full justify-between bg-gradient-to-b from-black relative z-20 p-3 ${!showGptSearchView && "-mt-5"}`}>
            <div>
                <img src={NETFLIX_LOGO}
                    alt="logo"
                    className="w-36 mt-4" />
            </div>

            {user && <div className="flex pt-2">
                {showGptSearchView && <select className="w-28 h-8 mr-2 mt-3" onChange={handleChangeLanguage}>
                    {LANGUAGE_CONSTANTS.map(lan => <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>)}
                </select>}
                <button onClick={handleGptSearch} className="text-white w-28 h-8 pb-1 pt-1 mt-3 rounded-lg mr-1 bg-purple-800">
                    {!showGptSearchView ? "GPT Search" : "Home Page"}
                </button>
                <img className="w-8 h-8 mr-1 mt-2" alt="user-icon" src={user?.photoUrl} />
                <button onClick={handleSignOut} type="button" className="font-semibold text-sm text-red-500" >
                    Sign Out
                </button>
            </div>}

        </div >


    )
}

export default Header