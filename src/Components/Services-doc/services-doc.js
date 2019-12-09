import React from 'react'
import './services-style.css'

export default function ServicesDoc(props) {
    return (
        <div className="services-section">
            {props.z.map(el=>
                <div className= {el.color==="green" ? "patients-services" : "doctors-services"}>
                    <p>{el.for}</p>
                    <h2 className="services-title">{el.title}</h2>
                    {el.country && 
                       <select className="select-country" name="country">
                           {el.country.map(e=>
                            <option>{e}</option>
                           )}
                       </select>
                    }
                    <img className="services-sect-img" src={el.img} alt=""/>
                </div>
                
            )}
        </div>
    )
}
