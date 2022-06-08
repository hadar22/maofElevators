import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import './Home.css'



//import {Link } from 'react-router-dom';
//{require("../../images/elevetor_1.png").default}
function Home(){
    return(
       <div>
        <div className="home">
            
            <img className='po' src='/homePage.jpg'/>
            <div className='t'>
                <p className='text-home'>מעוף מעליות מתמחה בהתקנת והוספת מעליות או מעלונים בבניינים קימיים ובתים פרטיים</p>
            </div>
            
           
            
        </div>
        
        </div>
    );
}

export default Home;