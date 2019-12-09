import React from 'react'
import './offices-card-style.css'

export default function OfficesCard(props) {
    return (
        <div className="offices-list">
            {props.c.map(elt=>
                <a href={elt.url}>
                    <div className="office-card">
                        <figure className="office-image">
                            <img scr={elt.img} srcSet={elt.src} alt=""/>
                        </figure>
                        <div className="office-descrp">
                            <span>{elt.desc}</span>
                            <button className="office-button">SEE OPENINGS</button>
                        </div>
                    </div>
                </a>
            )}
        </div>
    )
}
