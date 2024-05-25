/* eslint-disable react-hooks/exhaustive-deps */
import { options } from '../utils/constants'
import { topRatedMovies } from '../utils/moviesNow'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useTopRatedMovies = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getMoviesData();

    }, [])

    const getMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', options)
        const jsonData = await data.json()

        dispatch(topRatedMovies(jsonData.results));


    }

}

export default useTopRatedMovies;