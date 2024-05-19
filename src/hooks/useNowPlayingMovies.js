/* eslint-disable react-hooks/exhaustive-deps */
import { options } from '../utils/constants'
import { addMoviesNow } from '../utils/moviesNow'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getMoviesData();

    }, [])

    const getMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const jsonData = await data.json()

        dispatch(addMoviesNow(jsonData.results));


    }

}

export default useNowPlayingMovies;