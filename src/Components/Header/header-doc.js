import React from 'react'
import './header-doc-style.css'

export default function HeaderDoc(props) {
    return (
        
        <div className="navbar">
            <a href="https://www.docplanner.com/about-us">
                <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"  className="logo-docplanner" alt="Docplanner Logo"></img>
            </a>

            <ul className="header-menu">
                {props.x.map(el =>
                    <li className={el.class}>
                        <a href={el.url}>
                            {el.name}
                                {!el.drop ? null : 
                                    <ul className="dropdown-menu">    
                                        {el.drop.map((e,i) =>
                                            <li key={i}><a href={e.url}>{e.name}</a></li>
                                        )}
                                    </ul> 
                                }
                        </a>
                    </li>
                )}     
            </ul>
        </div>
    )
}
