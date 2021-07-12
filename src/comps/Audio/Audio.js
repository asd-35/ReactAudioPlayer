import React, {useState} from 'react'
import "./Audio.css"
import {AiOutlineFastBackward, AiOutlineFastForward} from 'react-icons/ai'
import { FaPlay, FaPause} from "react-icons/fa"


const Audio = () => {
    const[isPlaying,setIsPlaying] = useState(true);
    
    const handlePlayPause = () => {
        if(isPlaying){
            setIsPlaying(false)
        }else{
            setIsPlaying(true)
        }
    }
    
    return (
        <div className="container">
            <audio src="song.mp3"></audio>
            <div className="buttons">
                <button className ="arrows"><AiOutlineFastBackward /> 30 </button>
                <button className ="playPause" onClick={handlePlayPause}> {isPlaying ? <FaPlay /> : <FaPause />} </button>
                <button className ="arrows">30 <AiOutlineFastForward /></button>
            </div>
            <div className="currentTime">0:00</div>
            <div>
                <input type="range" className="bar"/>
            </div>
            <div className="durationTime">3:00</div>
        </div>
    )
}

export default Audio
