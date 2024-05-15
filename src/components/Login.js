import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

function Login() {
    const [isSignIn, setSignIn] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleClickButtonSignIn = () => {
        const message = checkValidData(null, email.current.value, password.current.value);
        setErrorMsg(message);
        if (message) return
        // sign in sign up logic
        if (isSignIn) {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                    navigate('/');
                });

        }


    }
    const handleClickButtonSignUp = () => {

        const message = checkValidData(name.current.value, email.current.value, password.current.value);
        setErrorMsg(message);
        if (message) return
        // sign in sign up logic
        if (!isSignIn) {
            // sign up logic build
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    // const user = userCredential.user;



                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/130660985?v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL }))
                        navigate("/browse")
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMsg(error.message);
                    });


                    // console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    //  error handling
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                    navigate('/');
                });
        }
        else {
            // sign in logic build
        }


    }

    const toggleSignInForm = () => {
        setSignIn(!isSignIn)



    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg"
                    alt="bgImage"
                    className="bg-cover w-lvw"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="p-6 bg-black bg-opacity-70 absolute w-3/12 my-32 mx-auto left-0 right-0 flex flex-col justify-center rounded-lg">

                <h1 className="font-bold text-white text-xl p-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn && <input ref={name} type="text" placeholder='Full Name' className="p-2 m-2 mb-4 rounded-lg bg-gray-700" />}

                <input ref={email} type="text" placeholder='Email Adress' className="p-2 m-2 mb-4 rounded-lg bg-gray-700" />

                <input ref={password} type="password" placeholder="Password" className="p-2 m-2 mb-2 rounded-lg  bg-gray-700" />
                <p className='text-red-600 p-2'>{errorMsg}</p>
                {isSignIn ?
                    <button className="bg-red-600 h-10 rounded-lg text-white text-center mt-5 p-2 m-2 mb-4" onClick={handleClickButtonSignIn}>
                        Sign In
                    </button> :
                    <button className="bg-red-600 h-10 rounded-lg text-white text-center mt-5 p-2 m-2 mb-4" onClick={handleClickButtonSignUp}>
                        Sign Up
                    </button>
                }

                <p className="text-white p-2"> {isSignIn ? "New to Netflix?" : "Already Registered?"}
                    <span className="text-blue-700 font-semibold ml-2 cursor-pointer" onClick={toggleSignInForm}>
                        {isSignIn ? "Sign up Now" :
                            "Sign In Now"}
                    </span>
                </p>
            </form>

        </div>
    )
}

export default Login
