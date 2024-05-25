import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = (props) => {
    const { movies } = props
    console.log(movies)
    const { poster_path } = movies

    return (
        <div className='w-48'>
            <img className='p-2' alt="movie card" src={IMAGE_CDN_URL + poster_path} />
        </div>
    )
}

export default MovieCard
