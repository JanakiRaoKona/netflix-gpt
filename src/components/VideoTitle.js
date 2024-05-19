import React from 'react'

const VideoTitle = ({ title, overView }) => {
    return (
        <div className="pt-[20%] px-20 absolute bg-gradient-to-r from-black w-full aspect-video">
            <div>
                <h1 className="text-4xl text-white font-bold">{title}</h1>
                <p className="text-sm w-1/4 mt-4 text-white" >{overView}</p>
            </div>
            <div>
                <button className="bg-white hover:bg-slate-300 text-black rounded-lg w-32 h-8 mt-3">

                    ▶ Play</button>

                <button className="bg-slate-700 hover:bg-slate-500 text-white rounded-lg w-32 h-9 mx-4 p-1">ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
