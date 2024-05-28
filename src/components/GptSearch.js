import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestions from './GptMovieSuggestions'


const GptSearch = () => {
    return (

        <div className="pt-[30%] md:pt-[5%] md:h-auto md:bg-cover -mt-20 w-screen object-cover bg-[url('https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg')]">
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch
