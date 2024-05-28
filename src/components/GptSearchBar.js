import React, { useRef } from 'react';
import language from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { model, generationConfig } from '../utils/openAi';
import { options } from '../utils/constants';
import { addGptMovies } from '../utils/gptChatSlice';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const selectLanguage = useSelector((store) => store.language.language);
    const dispatch = useDispatch()

    const searchMovieTMDB = async (movie) => {

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false', options)
        const jsonData = await data.json();
        return (jsonData);


    }


    const handleGptSearchClick = async () => {

        const getQuery = `Give best five movie suggestions for "${searchText.current.value}". Please provide the response in a comma-separated format like this: Movie1, Movie2, Movie3, Movie4, Movie5.`;


        const chatSession = model.startChat({
            generationConfig,

        });

        const responseResults = await chatSession.sendMessage(getQuery);
        const searchResults = responseResults?.response?.text()?.split(",");
        if (!searchResults) return
        const promiseArray = searchResults.map(movie => searchMovieTMDB(movie))

        const tmdbResults = await Promise.all(promiseArray)

        dispatch(addGptMovies({ gptMovieResults: tmdbResults, gptMovieNames: searchResults }))



    };



    return (
        <div className="pt-[20%] text-center">
            <form className="p-6 m-6" onSubmit={(e) => e.preventDefault()}>
                <input

                    ref={searchText}
                    type="text"
                    className="p-3 bg-white text-black sm:w-4/12 rounded-lg w-40"
                    placeholder={language[selectLanguage].gptSearchBarPlaceHolder}
                />
                <button
                    onClick={handleGptSearchClick}
                    className="ml-4 py-3 px-4 bg-red-700 rounded-lg text-white"
                >
                    {language[selectLanguage].search}
                </button>
            </form>

        </div>
    );
};

export default GptSearchBar;

