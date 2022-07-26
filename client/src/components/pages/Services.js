import React,{useEffect, useState} from 'react'
import '../../App.css'
import './Services.css'

function Services(){
    return(
        <div className='services'>
            
            <div className='t-s'>
                <h1 className='title-service'>השירותים שלנו</h1>
            </div>
            <img className='photo-service' src='/services.jpeg'/>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>התקנת כל סוגי המעליות - הידראולית, מעלון, חשמלית</h3>

            </div>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>בניית פיר בעת הצורך</h3>
            </div>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>הפקת היתרי בנייה ממהנדסים, יועצים ועירייות</h3>
            </div>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>שינוי מהלך מדרגות</h3>
            </div>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>תכנון, ייצור והתקנת מעלית ייחודית למקום</h3>
            </div>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>הוספת מעליות ומעלונים לבתים קיימים, וילות, דופלקסים, מעליות פרטיות . בפיקוח מכון התקנים</h3>
            </div>
            <div className='service'>
                <div className='icon-service'><i class="far fa-check-circle"></i></div>
                <h3 className='txt-service'>מתן שירות 24/7</h3>
            </div>

        </div>

    );
}
export default Services