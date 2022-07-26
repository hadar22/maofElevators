import React,{useState, useEffect} from 'react'

import './Process.css'

function Process(){
    return(
        <div className='process'>
            <h1 className='title-process'></h1>
            <div className='stage'>
            
                <h3 className='stage-txt'>יצירת קשר</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>הגעה של איש מקצוע למקום המבוקש</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>חתימת חוזה</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>התחלת העבודה- כל מקום לפי מה שנדרש.
                הקמת פיר, שינוי מהלך מדרגות, הוצאת היתרים ואישורים...</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>הזמנת וייבוא חלקי המעלית+ הרכבתם</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>הזמנת חברת החשמל- טופס 4</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'> הזמנת מכון התקנים - אישור המעלית</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>קבלת המעלית - הסבר שימוש</h3>
            </div>
            <i class="fas fa-arrow-down"></i>
            <div className='stage'>
                <h3 className='stage-txt'>ליווי צמוד - שירות 24/7</h3>
            </div>
        </div>
    );
}
export default Process