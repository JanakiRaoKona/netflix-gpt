import { createSlice } from "@reduxjs/toolkit";

const moviesNow = createSlice(
    {
        name: "movies",
        initialState: {
            moviesNowObj: null,
            trailerNowObj: null,
        },
        reducers: {
            addMoviesNow: (state, action) => {
                state.moviesNowObj = action.payload
            },
            trailerNow: (state, action) => {
                state.trailerNowObj = action.payload
            }
        }
    }
)

export const { addMoviesNow, trailerNow } = moviesNow.actions

export default moviesNow.reducer