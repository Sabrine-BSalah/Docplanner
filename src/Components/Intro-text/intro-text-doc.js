import React from 'react'
import './intro-text-style.css';


export default function IntroTextDoc(props) {
    return (
            <div className="intro-content">
                {props.y.map (el=>
                    <p>{el}</p>
                )}   
            </div>
    )
}
