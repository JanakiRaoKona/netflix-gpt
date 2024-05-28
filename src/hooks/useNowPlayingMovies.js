/* eslint-disable react-hooks/exhaustive-deps */
import { options } from '../utils/constants'
import { addMoviesNow } from '../utils/moviesNow'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.moviesNowObj)

    const dispatch = useDispatch()
    useEffect(() => {
        if (!nowPlayingMovies) getMoviesData();

    }, [])

    const getMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const jsonData = await data.json()

        dispatch(addMoviesNow(jsonData.results));


    }

}

export default useNowPlayingMovies;