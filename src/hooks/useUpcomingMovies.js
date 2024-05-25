/* eslint-disable react-hooks/exhaustive-deps */
import { options } from '../utils/constants'
import { upComingMovies } from '../utils/moviesNow'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getMoviesData();

    }, [])

    const getMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        const jsonData = await data.json()

        dispatch(upComingMovies(jsonData.results));


    }

}

export default useUpcomingMovies;