import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useNowPopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
    useNowPlayingMovies();
    useNowPopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGptSearchView = useSelector(store => store.gpt.showGptSearch)


    return (
        <div className={`${!showGptSearchView ? "bg-black mt-0" : ""}`}>
            <div className={`${!showGptSearchView ? "relative" : ""}`}>
                <div className="relative top-0 left-0 w-full z-50">
                    <Header />
                </div>

                <div className={`${!showGptSearchView ? "-mt-28" : "mt-0"}`}>
                    {showGptSearchView ? <GptSearch /> :
                        <>
                            <MainContainer />
                            <SecondaryContainer />
                        </>}
                </div>
            </div>
        </div>

    )
}

export default Browse 
