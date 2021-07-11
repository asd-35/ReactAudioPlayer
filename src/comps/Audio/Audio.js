import React from 'react'
import "./Audio.css"
import {AiOutlineFastBackward, AiOutlineFastForward} from 'react-icons/ai'
import { FaPlay, FaPause} from "react-icons/fa"
import {BsSlash} from "react-icons/bs"

const Audio = () => {
    return (
        <div className="container">
            <audio></audio>
            <div className="buttons">
                <button><AiOutlineFastBackward /> 30 </button>
                <button><FaPlay /> <BsSlash /> <FaPause /> </button>
                <button>30 <AiOutlineFastForward /></button>
            </div>
            <div>0:00</div>
            <div>
                <input type="range"/>
            </div>
            <div>3:00</div>
        </div>
    )
}

export default Audio
