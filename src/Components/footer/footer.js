import React from 'react'
import './footer-style.css'

export default function footer(props) {
    return (
        <div className="footer-content">
             <p className="footer-leaders">
                 <span>We are leaders in 10 countries: </span>
                 {props.d.map(el=>
                    <span className="footer-link"><a href={el.url}>{el.country}</a><span>, </span></span>
                 )}
             </p>
             <p className="footer-cookies">
                This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
            </p>
            <p>
                www.docplanner.com © 2019
            </p>
        </div>
    )
}
