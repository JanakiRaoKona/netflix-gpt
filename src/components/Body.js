/* eslint-disable react-hooks/exhaustive-deps */

import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider, createBrowserRouter } from "react-router-dom"




function Body() {




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





    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
