import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const nowMovies = useSelector(store => store.movies)

    return (
        <div className='md:relative md:-mt-72 mt-0 z-20'>

            <MoviesList title={"Now Playing"} nowMovies={nowMovies.moviesNowObj} />
            <MoviesList title={"Popular Movies"} nowMovies={nowMovies.popularMoviesObj} />
            <MoviesList title={"Top Rated Movies"} nowMovies={nowMovies.topRatedMoviesObj} />
            <MoviesList title={"UpComing Movies"} nowMovies={nowMovies.upComingMoviesObj} />
        </div>
    )
}

export default SecondaryContainer
