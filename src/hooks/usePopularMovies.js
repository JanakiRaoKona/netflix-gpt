/* eslint-disable react-hooks/exhaustive-deps */
import { options } from '../utils/constants'
import { popularMovies } from '../utils/moviesNow'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const useNowPopularMovies = () => {
    const nowPlayingPopularMovies = useSelector(store => store.popularMoviesObj)

    const dispatch = useDispatch()
    useEffect(() => {
        !nowPlayingPopularMovies && getMoviesData();

    }, [])

    const getMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', options)
        const jsonData = await data.json()

        dispatch(popularMovies(jsonData.results));


    }

}

export default useNowPopularMovies;