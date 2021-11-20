import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import './Home.css'



//import {Link } from 'react-router-dom';

function Home(){
    return(
       <div>
        <div className="home">
            <div className="imgH">
            <img src={require("../../images/elevetor_1.png").default} className="home_img"  alt="home"/>  
            </div>
            <div className="text">
             <h1 className="title">מעוף מעליות</h1>
            <h2 className="sub_title">הוספת והתקנת מעליות בבתים קיימים </h2>
            <section className="Filling-in-details"> 
               <p> ?מעוניינים להוסיף/להתקין מעלית </p>
               <div className="name-input">
                    <from>
                       <input type="string" name="name" 
                       placeholder="שם מלא" className="footer-input"/> 
                       
                    </from>
                    </div>
                    <div className="number-input">
                    <from>
                       <input type="number" name="number" 
                       placeholder="מספר טלפון" className="footer-input"/> 
                       
                    </from>
                    </div>
                    <div className="location-input">
                    <from>
                       <input type="string" name="location" 
                       placeholder="עיר/ישוב" className="footer-input"/> 
                       
                    </from>
                    </div>
                    <div className="kind-input">
                    <from>
                       <input type="number" name="number" 
                       placeholder="סוג" className="footer-input"/> 
                       
                    </from>
                    </div>
            </section>
           </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Home;