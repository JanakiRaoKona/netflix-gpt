import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesNowReducer from "./moviesNow";
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesNowReducer

        },
    }
)

export default appStore