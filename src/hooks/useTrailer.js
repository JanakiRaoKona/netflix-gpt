/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { trailerNow } from "../utils/moviesNow";

const useTrailer = (movieId) => {

    const dispatch = useDispatch()

    useEffect(() => {
        getMyVideoBg();

    }, [])

    const getMyVideoBg = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", options)
        const jsonData = await data.json();

        dispatch(trailerNow(jsonData))
    }


}

export default useTrailer
