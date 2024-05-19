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

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(store => store?.user)



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

        <div className="flex w-full justify-between bg-gradient-to-b from-black p-3">
            <div>
                <img src={NETFLIX_LOGO}
                    alt="logo"
                    className="w-36" />
            </div>

            {user && <div className="">
                <img className="w-14" alt="user-icon" src={user?.photoUrl} />
                <button onClick={handleSignOut} type="button" className="font-semibold text-sm text-red-500" >Sign Out</button>
            </div>}

        </div>


    )
}

export default Header