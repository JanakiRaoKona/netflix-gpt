import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'


const MainContainer = () => {
    const movies = useSelector(store => store?.movies?.moviesNowObj)
    if (!movies) return
    const mainFirstMovie = movies[0];

    const { original_title, overview, id } = mainFirstMovie

    return (
        <div className="mt-28 relative md:mt-0 z-20">
            <VideoTitle title={original_title} overView={overview} />
            <VideoBg movieId={id} />
        </div>
    )
}

export default MainContainer
