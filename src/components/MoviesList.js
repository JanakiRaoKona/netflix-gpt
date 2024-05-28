import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    const { title, nowMovies } = props
    if (!nowMovies) return null;


    return (
        <div className="p-3">
            <div>
                <h1 className="p-2 text-lg md:text-3xl font-bold text-slate-100">{title}</h1>
            </div>
            <div className="flex overflow-x-scroll  scrollbar-hide">
                <div className='flex'>
                    {nowMovies.map(eachMovie => <MovieCard key={eachMovie.id} movies={eachMovie} />)}
                </div>

            </div>
        </div>
    )
}

export default MoviesList
