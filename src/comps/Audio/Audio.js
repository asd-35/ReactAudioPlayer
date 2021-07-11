import React from 'react'
import "./Audio.css"

const Audio = () => {
    return (
        <div className="container">
            <audio></audio>
            <div className="buttons">
                <button>roll 30 back</button>
                <button>play / pause</button>
                <button>roll 30 forward</button>
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
