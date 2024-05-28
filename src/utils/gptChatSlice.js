import { createSlice } from "@reduxjs/toolkit";

const gptChatSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        gptMovieNames: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovies: (state, action) => {
            const { gptMovieNames, gptMovieResults } = action.payload
            state.gptMovies = gptMovieResults
            state.gptMovieNames = gptMovieNames
        }
    }
})

export const { toggleGptSearchView, addGptMovies } = gptChatSlice.actions
export default gptChatSlice.reducer