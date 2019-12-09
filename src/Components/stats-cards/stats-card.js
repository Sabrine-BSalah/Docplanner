import React from 'react'
import './stats-cards-style.css'

export default function StatsCard(props) {
    return (
        <div className="stats-cards">
            {props.b.map(el=>
               <div className={el.class}>
                    <img src={el.image} alt="" />
                    <h3 className="card-title">{el.title}</h3>
                    <p>{el.details}</p>
                </div>
            )}
        </div>
    )
}
