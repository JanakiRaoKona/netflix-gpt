import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesNowReducer from "./moviesNow";
import gptChatReducer from "./gptChatSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesNowReducer,
            gpt: gptChatReducer,
            language: configReducer,

        },
    }
)

export default appStore