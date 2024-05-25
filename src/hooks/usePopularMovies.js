/* eslint-disable react-hooks/exhaustive-deps */
import { options } from '../utils/constants'
import { popularMovies } from '../utils/moviesNow'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useNowPopularMovies = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getMoviesData();

    }, [])

    const getMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', options)
        const jsonData = await data.json()

        dispatch(popularMovies(jsonData.results));


    }

}

export default useNowPopularMovies;