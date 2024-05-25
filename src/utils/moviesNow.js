import { createSlice } from "@reduxjs/toolkit";

const moviesNow = createSlice(
    {
        name: "movies",
        initialState: {
            moviesNowObj: null,
            trailerNowObj: null,
            popularMoviesObj: null,
            topRatedMoviesObj: null,
            upComingMoviesObj: null,
        },
        reducers: {
            addMoviesNow: (state, action) => {
                state.moviesNowObj = action.payload
            },
            popularMovies: (state, action) => {
                state.popularMoviesObj = action.payload
            },
            topRatedMovies: (state, action) => {
                state.topRatedMoviesObj = action.payload
            },
            upComingMovies: (state, action) => {
                state.upComingMoviesObj = action.payload
            },
            trailerNow: (state, action) => {
                state.trailerNowObj = action.payload
            }
        }
    }
)

export const { addMoviesNow, trailerNow, popularMovies, topRatedMovies, upComingMovies } = moviesNow.actions

export default moviesNow.reducer