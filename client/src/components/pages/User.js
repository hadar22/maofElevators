import React,{useEffect, useState} from 'react'
import '../../App.css'
import './User.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

import { Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import {Worker} from '@react-pdf-viewer/core'



function User(){
    let {username}= useParams();
    const [info, setInfoList] = useState([])
    const [stageB,setStage] = useState(false)
    const [Planning, setPlanning] = useState(false)
    const [Procurement, setProcurement] = useState(false)
    const [workPlan, setWorkPlan] = useState(false)

    useEffect(() => {
        Axios.get(`http://localhost:3001/check/${username}`).then((response) =>{
            setInfoList(response.data)
        })
        
    },
    Axios.get(`http://localhost:3001/stageB/${username}`).then((response)=>{
            if(response.data[0].stageB === 1){
              setStage(true)
            }
        }),Axios.get(`http://localhost:3001/planning/${username}`).then((response)=>{
            if(response.data[0].planning === 1){
              setPlanning(true)
            }
        }),Axios.get(`http://localhost:3001/procurement/${username}`).then((response)=>{
            if(response.data[0].procurement === 1){
              setProcurement(true)
            }
        })
        ,[]);

    const uploaded = ()=>{
        

    }
    
    const StageB =()=>{
        Axios.get(`http://localhost:3001/stageB/${username}`).then((response)=>{
            if(response.data[0].stageB === 1){
              setStage(true)
            }
            else{
                return null
            }

        })
        
    }



    const getDate = (date)=> {
        const [d, time] = date.split("T")
        return d
    }

    return (
        <div className='user'>
            <h1 className='title'> שלום {username}</h1>
            
            <div className='a-level'>
               <hr className='hr'/>
            {info.map((val)=>{return  <div className='crdd'>
                <h3 className='font-info'>מספר משרד העבודה: {val.workOffice}</h3>
                <h3 className='font-info'>תאריך חתימת חוזה: {getDate(val.dateSignature)}</h3>
                <h3 className='font-info'>{val.elevatorType}:סוג המעלית </h3>
                
            </div>})}
             <hr className='hr'/>
            </div>
            <div>
                {Planning? <div>{Procurement? <div className='done'>
                <div className='icon'><i className="fas fa-check-square"></i>תכנון מול ספקים</div>
                <div className='icon'><i className="fas fa-check-square"></i>הרכישה בוצעה בהצלחה!</div>
                   </div>: <div><div className='done'>
                <div className='icon'><i className="fas fa-check-square"></i>תכנון מול ספקים</div>
                </div>
                <div className='not-done'><h1>עכשיו אנחנו בתהליך הרכש לרכיבי המעלית</h1></div> 
                    
                       </div>}
                </div> 
                :<div className='not-done'><h1>אנחנו עכשיו בשלב תכנון המעלית מול הספקים</h1></div> }
            </div>
            {workPlan? <div className='work-plan'>
                <h1 className='wp'>תוכנית עבודה</h1>
                <div className='view-pdf'>
                  <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js'>
                    <Viewer fileUrl='/2.pdf'/>  
                  </Worker>
                </div>
            </div>: null}
            
            
            
                
                        
            
            
            
        </div>
    );
    

}

export default User