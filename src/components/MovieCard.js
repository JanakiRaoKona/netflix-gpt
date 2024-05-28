import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = (props) => {
    const { movies } = props

    const { poster_path } = movies
    if (!poster_path) return null;

    return (
        <div className='md:w-48 w-32'>
            <img className='p-2' alt="movie card" src={IMAGE_CDN_URL + poster_path} />
        </div>
    )
}

export default MovieCard
