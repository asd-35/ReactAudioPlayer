import React, {useState,useRef,useEffect} from 'react'
import "./Audio.css"
import {AiOutlineFastBackward, AiOutlineFastForward} from 'react-icons/ai'
import { FaPlay, FaPause} from "react-icons/fa"


const AudioPlayer = () => {
    const[isPlaying,setIsPlaying] = useState(false);
    const[duration,setDuration] = useState(0);
    const[currentTime,setCurrentTime] = useState(0);
    
    const audioMp3 = useRef();
    const progBar = useRef();

    useEffect( () => {
        let mins = Math.floor(audioMp3.current.duration / 60);
        let secs = Math.floor(audioMp3.current.duration % 60);
        setDuration(mins + ":" + secs)
        progBar.current.max = Math.floor(audioMp3.current.duration);

    },[audioMp3?.current?.loadedmetadata,audioMp3?.current?.readyState])
    
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
            
        if(isPlaying){
            audioMp3.current.pause()
        }else{
            audioMp3.current.play()
        }
    }

    const changeBar = () => {
        audioMp3.current.currentTime = progBar.current.value;
        let mins = Math.floor(progBar.current.value / 60);
        let secs = Math.floor(progBar.current.value % 60);
        setCurrentTime(mins + ":" + secs);
    }
    
    
    return (
        <div className="container">
            <audio ref={audioMp3} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
            <div className="buttons">
                <button className ="arrows"><AiOutlineFastBackward /> 30 </button>
                <button className ="playPause" onClick={handlePlayPause}> {isPlaying ? <FaPause /> : <FaPlay />} </button>
                <button className ="arrows">30 <AiOutlineFastForward /></button>
            </div>
            <div className="currentTime">{currentTime}</div>
            <div>
                <input type="range" className="bar" ref={progBar} defaultValue="0" onChange={changeBar}/>
            </div>
            <div className="durationTime">{duration}</div>
        </div>
    )
}

export default AudioPlayer
