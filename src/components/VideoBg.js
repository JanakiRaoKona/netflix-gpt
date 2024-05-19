/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux'

import useTrailer from '../hooks/useTrailer'
const VideoBg = ({ movieId }) => {
    useTrailer(movieId)
    const trailerData = useSelector(store => store.movies.trailerNowObj)

    if (!trailerData) return;
    const mainTrailer = trailerData?.results?.filter(item => item.type === "Trailer")
    const trailer = mainTrailer.length ? mainTrailer[0] : trailerData?.results[0]



    return (
        <div>

            <iframe className='w-full aspect-video'

                src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

            </iframe>
        </div >
    )
}

export default VideoBg

