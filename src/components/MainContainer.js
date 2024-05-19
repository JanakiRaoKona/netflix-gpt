import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'


const MainContainer = () => {
    const movies = useSelector(store => store?.movies?.moviesNowObj)
    if (!movies) return
    const mainFirstMovie = movies[0];
    // console.log(mainFirstMovie);
    const { original_title, overview, id } = mainFirstMovie

    return (
        <div>
            <VideoTitle title={original_title} overView={overview} />
            <VideoBg movieId={id} />

        </div>
    )
}

export default MainContainer
