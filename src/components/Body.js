
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'


function Body() {
    const dispatch = useDispatch()



    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])



    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL }))

            } else {

                dispatch(removeUser())

            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
