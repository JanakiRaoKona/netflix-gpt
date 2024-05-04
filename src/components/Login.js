import React from 'react'
import Header from './Header'
import { useState } from 'react'

function Login() {
    const [isSignIn, setSignIn] = useState(true)

    const handleSignIn = () => {
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
            <form className="p-6 bg-black bg-opacity-70 absolute w-3/12 my-32 mx-auto left-0 right-0 flex flex-col justify-center rounded-lg">

                <h1 className="font-bold text-white text-xl p-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn && <input type="text" placeholder='Full Name' className="p-2 m-2 mb-4 rounded-lg bg-gray-700" />}

                <input type="text" placeholder='Email Adress' className="p-2 m-2 mb-4 rounded-lg bg-gray-700" />

                <input type="password" placeholder="Password" className="p-2 m-2 mb-2 rounded-lg  bg-gray-700" />

                <button className="bg-red-600 h-10 rounded-lg text-white text-center mt-5 p-2 m-2 mb-4">{isSignIn ? "Sign In" : "Sign Up"}</button>

                <p className="text-white p-2"> {isSignIn ? "New to Netflix?" : "Already Registered?"}
                    <span className="text-blue-700 font-semibold ml-2 cursor-pointer" onClick={handleSignIn}>
                        {isSignIn ? "Sign up Now" :
                            "Sign In Now"}
                    </span>
                </p>
            </form>

        </div>
    )
}

export default Login
