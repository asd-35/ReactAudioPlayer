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
    const animationRef = useRef();

    useEffect( () => {
        let mins = Math.floor(audioMp3.current.duration / 60);
        let secs = Math.floor(audioMp3.current.duration % 60);
        setDuration(mins + ":" + secs)
        progBar.current.max = Math.floor(audioMp3.current.duration);

    },[audioMp3?.current?.loadedmetadata,audioMp3?.current?.readyState])
    
    const handlePlayPause = () => {
        const prevVal = isPlaying;
        setIsPlaying(!prevVal);
            
        if(!prevVal){
            
            audioMp3.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying);
        }else{
            audioMp3.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = () => {
        progBar.current.value = audioMp3.current.currentTime;
        let mins = Math.floor(progBar.current.value / 60);
        let secs = Math.floor(progBar.current.value % 60);
        setCurrentTime(mins + ":" + secs);
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeBar = () => {
        audioMp3.current.currentTime = progBar.current.value;
        let mins = Math.floor(progBar.current.value / 60);
        let secs = Math.floor(progBar.current.value % 60);
        setCurrentTime(mins + ":" + secs);
    }
    
    const back = () => {
        progBar.current.value = Number(progBar.current.value - 30)
        console.log(progBar.current)
        changeBar()
    }
    
    const forward = () => {
        progBar.current.value = Number(progBar.current.value + 30)
        changeBar()
    }
    
    return (
        <div className="container">
            <audio preload="metadata" ref={audioMp3} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
            <div className="buttons">
                <button className ="arrows" onClick={back}><AiOutlineFastBackward /> 30 </button>
                <button className ="playPause" onClick={handlePlayPause}> {isPlaying ? <FaPause /> : <FaPlay />} </button>
                <button className ="arrows" onClick={forward}>30 <AiOutlineFastForward /></button>
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
