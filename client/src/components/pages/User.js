import React,{useEffect, useState} from 'react'
import '../../App.css'
import './User.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {Link} from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import {Worker} from '@react-pdf-viewer/core'



function User(){
    let {username}= useParams();
    const [file, setFile]=useState('')
    const fileWorkPlan = "/"+file+".pdf"
    const [info, setInfoList] = useState([])
    const [stageB,setStage] = useState(false)
    const [Planning, setPlanning] = useState(false)
    const [Procurement, setProcurement] = useState(false)
    const [workPlan, setWorkPlan] = useState(false)
    const [electricCompany, setElectricCompany] = useState('')
    const [standardsInstitute, setStandardsInstitute] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:3001/check/${username}`).then((response) =>{
            setInfoList(response.data)
            setFile(response.data[0].projectNum)
            if(response.data[0].workPlan === 1){
                setWorkPlan(true)
            }
            if(response.data[0].electricCompany !== null){
                setElectricCompany(getDate(response.data[0].electricCompany))
            }
            if(response.data[0].standardsInstitute !== null){
                setStandardsInstitute(getDate(response.data[0].standardsInstitute))
            }
        
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

    



    const getDate = (date)=> {
        const [d, time] = date.split("T")
        const [y,m,day] =d.split("-")
        const dayNew = parseFloat(day)+1
        const stringDay = dayNew.toString()
        let newDate = ""
        if(dayNew<10){
            newDate = "0"+stringDay+"/"+m+"/"+y
        }else{
            newDate = stringDay+"/"+m+"/"+y
        }
        console.log(stringDay+"/"+m+"/"+y )
        return newDate
    }
    

    return (
        
        <div className='user'>
            <nav className='logout'>
            <Link to='/התחברות' replace className='nav-links-logout'>
                התנתק
            </Link>
            
        </nav>
            
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
                    <Viewer fileUrl={fileWorkPlan}/>  
                  </Worker>
                </div>
            </div>: null}
            {electricCompany? 
            <div>
                <h1>נקבע תאריך לקבלת טופס 4</h1>
            </div> : null}
            {standardsInstitute? <div>
                <h1>נקבע תאריך בדיקה של מכון התקנים - {standardsInstitute}</h1>
            </div> : null}
            
            
            
                
                        
            
            
            
        </div>
    );
    

}

export default User