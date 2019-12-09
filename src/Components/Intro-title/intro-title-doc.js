import React from 'react'
import './intro-title-style.css'

export default function intro() {
    return (
        <div className="introTitle">
            <div className="intro-logo">
                <img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcSet="https://www.docplanner.com/img/sygnet.png    1x,https://www.docplanner.com/img/sygnet@2x.png 2x" alt=""/>
            </div>
            <h1 className="intro-title">Making the healthcare experience more human</h1>
        </div>
    )
}
