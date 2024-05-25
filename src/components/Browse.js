import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useNowPopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
    useNowPlayingMovies();
    useNowPopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div className="bg-black">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full z-20 mt-20">
                    <Header />
                </div>
                <div className="-mt-20">
                    <MainContainer />
                    <SecondaryContainer />
                </div>
            </div>
        </div>
    )
}

export default Browse 
