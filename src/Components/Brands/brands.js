import React from 'react'
import './brands-style.css'

export default function Brands(props) {
    return (
        <div className="brands-section">
            <h2 className="brands-intro">We are a global company with local culture</h2>
            <ul className="brands-list">
                {props.a.map(el=>
                    <li className="brand-logo">
                        <a href={el.url} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 32"><path d={el.svg.path}></path></svg>
                        </a>
                    </li>    
                )}
            </ul>
        </div>
    )
}
