import React, {useState,useRef} from 'react'
import "./Audio.css"
import {AiOutlineFastBackward, AiOutlineFastForward} from 'react-icons/ai'
import { FaPlay, FaPause} from "react-icons/fa"


const AudioPlayer = () => {
    const[isPlaying,setIsPlaying] = useState(false);
    
    
    const audioMp3 = useRef();

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
            audioMp3.current.pause()
        if(isPlaying){
            
        }else{
            audioMp3.current.play()
        }
    }

    
    
    return (
        <div className="container">
            <audio ref={audioMp3} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
            <div className="buttons">
                <button className ="arrows"><AiOutlineFastBackward /> 30 </button>
                <button className ="playPause" onClick={handlePlayPause}> {isPlaying ? <FaPause /> : <FaPlay />} </button>
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

export default AudioPlayer
