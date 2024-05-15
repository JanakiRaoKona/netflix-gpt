import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate()

    const userPhoto = useSelector(store => store?.user?.photoUrl)
    console.log(userPhoto)


    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }


    return (

        <div className="flex w-11/12 justify-between absolute bg-gradient-to-b from-black z-10">
            <div>
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt="logo"
                    className="w-36" />
            </div>
            {
                userPhoto &&
                <div className="p-1">
                    <img className="w-12" alt="user-icon" src={userPhoto} />
                    <button onClick={handleSignOut} type="button" className="font-semibold text-red-500" >Sign Out</button>
                </div>
            }
        </div>


    )
}

export default Header