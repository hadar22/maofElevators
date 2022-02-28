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
            <p className= "txt"> ,מתמחה בהוספת והתקנת מעליות בבניינים קיימים </p>
            <p className= "txt"> הוספת מעלונים בבתים פרטיים </p>
            <h1 className= "txt1"> בואו להתרשם</h1>
         
         
           </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Home;