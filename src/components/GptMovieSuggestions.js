import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const GptMovieSuggestions = () => {
    const { gptMovieNames, gptMovies } = useSelector(store => store.gpt);




    if (!gptMovieNames || !gptMovies) return <div className='text-white font-bold text-3xl p-10 text-center'>Search your favourite Movies With Gemini Ai</div>;




    return (
        <div className='text-white z-20'>
            {gptMovieNames[0] && gptMovies[0] ? (
                <div className="">
                    {gptMovieNames.map((movie, index) => <MoviesList key={movie} title={movie} nowMovies={gptMovies[index].results} />)}

                </div>
            ) : (
                <div className="text-white font-bold text-3xl p-10 text-center">No movie suggestions available.</div>
            )}

        </div>
    );
}

export default GptMovieSuggestions;

