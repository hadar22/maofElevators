import React from 'react'
import './Footer.css';
import {Link } from 'react-router-dom';
//import * as Icons from "react-icons/fa";

function Footer() {
    return (
        <div className='footer-container'>
            
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>קצת עלינו</h2>
                        <Link to='/'>אודות</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className='website-lefts'> מעוף מעליות © 2022</small>
                    <div className="social-icons"> 
                    
                     <a 
                     className="facebook"
                     href="https://www.facebook.com/maofma"
                     target="_blank">
                     
                     
                         <i className="fab fa-facebook-f"> 
                         </i>בואו לבקר בדף הפייסבוק שלנו 
                         </a>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer