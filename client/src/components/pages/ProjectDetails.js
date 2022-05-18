import React,{useEffect, useState} from 'react'
import '../../App.css'
import './ProjectDetails.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

import { Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import {Worker} from '@react-pdf-viewer/core'


function ProjectDetails(){
     
    let {username}= useParams();
    const [my, setMy] = useState(null)
    const getData = async ()=>{
        try{
            const res  = await Axios.get(`http://localhost:3001/procurement/${username}`)
            await setMy(res.data.procurement)
            console.log(my)
        }catch(err){
            console.log(err)
        }
    }
    //let planning = Axios.get(`http://localhost:3001/planning/${username}`).data.planning;
    
    const [info, setInfoList] = useState([])
    const [A,setA]= useState(false)
    const [workOffice,setWorkOffice] = useState('')
    const [dateSignature, setDaeSignature]= useState('')
    const [elevatorType, setElevatorType] = useState('')
    const [endDate, setEndDate] = useState('')
    const [engineer,setEngineer] = useState('')
    const [addEngin, setAddEngineer] = useState(false)
    const [Planning, setPlanning] = useState(false)
    const [Procurement, setProcurement] = useState(false)
    const [workPlan, setWorkPlan] =  useState(false)
    const [pdfFile, setPdfFile] =  useState(null)
    const [pdfFileError, setPdfFileError] = useState('')
    const [file,setFile] = useState(null)
    const [viewPdf ,  setViewPdf]= useState(null)
    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/check/${username}`).then((response) =>{
            setInfoList(response.data)
            //console.log(response.data[0].engineer)
            if(response.data[0].workOffice !== null){
                setA(true)
            }
            if(response.data[0].planning === 1){
                setPlanning(true)
            }
           
            if(response.data[0].procurement === 1){
                setProcurement(true)
            }
            if(response.data[0].workPlan === 1){
                setWorkPlan(true)
            }
            if(response.data[0].engineer !== 'null'){
                setAddEngineer(true)
                setEngineer(response.data[0].engineer)
            }
        })
        
    }
    ,[]);
    
    const updateA = () => {
        
        Axios.post(`http://localhost:3001/updateA/${username}`,{
            workOffice: workOffice,
            dateSignature: dateSignature,
            elevatorType: elevatorType,
            endDate: endDate
        });
        setA(true)
        //setInfoList([...info, {username:username, workOffice: workOffice,elevatorType: elevatorType,endDate: endDate},])
        alert("תודה שמילאת את הפרטים")
    }
    
   
    const planning =  () =>{
        
        Axios.post(`http://localhost:3001/planning/${username}`)
        setPlanning(true)
         
    }
    const procurement =()=>{
        Axios.post(`http://localhost:3001/procurement/${username}`)
        setProcurement(true)
  
        
    }
   
    const addEngineer = () =>{
        Axios.post(`http://localhost:3001/addEngineer/${username}`,{
            engineer:engineer
        });
        setAddEngineer(true)
        alert('שם המהנדס נשמר במערכת')
    }
    const getDate = (date)=> {
        const [d, time] = date.split("T")
        return d
    }
    const fileType = ['application/pdf']
    const handlePdfFileChange = (e)=>{
        console.log(e.target.files[0])
        let selectedFile = e.target.files[0]
        if(selectedFile){
            
            if(selectedFile && fileType.includes(selectedFile.type)){
                console.log(e.target.value)
                setFile(e.target.files[0])
 
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onloadend = (e) =>{
                    setPdfFileError('')
                    setPdfFile(e.target.result)
                    
                }
                
            }
            else{
                setPdfFile(null)
                setPdfFileError('Please select valid pdf file')
            }
        }
        else{
            console.log('select your file')
        }
    }
    const handlePdfFileSubmit = (e) =>{
        e.preventDefault()
        if(pdfFile !== null){
            console.log(pdfFile)
            setViewPdf(pdfFile)
            
            const data= new FormData()
            data.append('file', file)
            Axios.post('//localhost:3001/upload',data).then((e)=>{
                console.log('Success')
            }).catch((e)=>{
                console.error('Error', e)
            })
        }
        else{
            
            setViewPdf(null)
        }
    }

  
 
    return (
        <div className='update'>
            <h1 className='title'>עדכון פרטים ל{username}</h1>
            {A? <div className='map'>{info.map((val)=>{ return <h1 className='font-info'> משרד העבודה: {val.workOffice} <br/>
                  תאריך חתימת חוזה: {getDate(val.dateSignature) } <br/>
                  תאריך גמר: {getDate(val.endDate)}<br/>
                 
                  </h1> 
                })}</div>:<div className='levelA'>
                <h1 className='title'>עדכון אחרי חתימת חוזה-שלב א</h1>
                 <input name="workOffice" placeholder="מספר ממשרד העבודה" type="number" value={workOffice} onChange={e => setWorkOffice(e.target.value)}/><br/>
                 <input name="dateSignature" placeholder="תאריך חתימת החוזה" type="date" value={dateSignature} onChange={e => setDaeSignature(e.target.value)}/><br/>
                 <input name="elevatorType" placeholder='סוג המעלית' type="text" value={elevatorType} onChange={e => setElevatorType(e.target.value)}/><br/>
                 <input name="endDate" placeholder='תאריך גמר הפרויקט' type="date" value= {endDate} onChange ={e => setEndDate(e.target.value)}/>
                
                 <button onClick={updateA}>עדכן שלב א</button></div>
                  
            
}
            <div className='engineer'>
            
                <p className='ans'>?האם צריך היתר בנייה</p>
                <button onClick={addEngineer}>כן</button>
                
                {addEngin? <h1>{engineer} :יש כבר מהנדס </h1> :<div>
                    <p> אם כן הוסף את שמו של המהנדס</p>
                <input name="engineer" placeholder='שם המהנדס להיתר' type={'text'} value={engineer} onChange={e => setEngineer(e.target.value)}/>
                <button onClick={addEngineer}>שמור</button>
                </div> }
                
               
            </div>
            <div className='levelB'>
                <h1 className='title'>שלב ב</h1>
                {Planning ? <div><h1 className='font-info'>שלב התכנון מול ספקים בוצע</h1> </div> :<div>
                    <h1 className='font-info'>אנא בצע את תכנון המעלית מול ספקים </h1>
                    <button onClick={planning}>סיימתי</button>
                </div> }
                {Procurement ? <div>
                    <h1 className='font-info'>תהליך הרכש בוצע</h1>
                </div> :<div><h1 className='font-info'>אנא בצע רכישה של כל החלקים למעלית</h1>
                <button type='submit' onClick={procurement}>רכשתי הכל</button></div> }

            </div>

            <div className='labelC'>
                <h1 className='title'>שלב ג - תוכנית עבודה</h1>
                <h3 >העלה קובץ ובו מפורטים כל המשימות שצריך לבצע </h3>
                <h3>שים לב ששם הקובץ הוא מספר הפרויקט</h3>
                <h4>numOfProject.pdf</h4>
                <div className='container'>
                    <br></br>
                    <form className='form-group' onSubmit={handlePdfFileSubmit}>
                        <input type ="file" className='form-control'
                          required onChange={handlePdfFileChange}/>
                        {pdfFileError&& <div className='error-msg'>{pdfFileError}</div>}
                        <br></br>
                        <button type = "submit" className = 'btn btn-success btn-lg'>
                            UPLOAD
                        </button>
                    </form>
                    
                    <br></br>
                    
                    <div className='pdf-container'>
                        {viewPdf &&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                                <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]}/>
                            </Worker></>}
                        {!viewPdf &&<>No file is selected yet</>}
                        
                    </div>
                </div>
            </div>
    
        </div>

    );
}
export default ProjectDetails

/*<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
                                <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]}></Viewer>
                            </Worker></>
                            <button onClick={stageB}>עוברים לשלב ב</button> */