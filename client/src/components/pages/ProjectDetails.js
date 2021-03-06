import React,{useEffect, useState} from 'react'
import '../../App.css'
import './ProjectDetails.css'
import Popup from '../Popup'
import 'bootstrap/dist/css/bootstrap.css'
import {useParams, Link} from 'react-router-dom'
import Axios from 'axios'
//import {Link} from 'react-router-dom'
import { Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import {Worker} from '@react-pdf-viewer/core'



function ProjectDetails(){
     
    let {username}= useParams();
    const [projectNum, setProjectNum]= useState('')
    const fileWork = "/"+ projectNum +".pdf"
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
    const [popupOpen,setPopup]= useState(false)
    const [info, setInfoList] = useState([])
    const [A,setA]= useState(false)
    const [workOffice,setWorkOffice] = useState('')
    const [dateSignature, setDateSignature]= useState('')
    const [elevatorType, setElevatorType] = useState('')
    const [endDate, setEndDate] = useState('')
    const [engineer,setEngineer] = useState('')
    const [addEngin, setAddEngineer] = useState(false)
    const [noEngineer, setNoEngineer]= useState(false)
    const [Planning, setPlanning] = useState(false)
    const [Procurement, setProcurement] = useState(false)
    const [workPlan, setWorkPlan] =  useState(false)
    const [pdfFile, setPdfFile] =  useState(null)
    const [pdfFileError, setPdfFileError] = useState('')
    const [file,setFile] = useState(null)
    const [viewPdf ,  setViewPdf]= useState(null)
    const defaultLayoutPluginInstance = defaultLayoutPlugin()

    const [electricCompany, setElectricCompany] = useState('')
    const [standardsInstitute, setStandardsInstitute] = useState('')
    const [receivElevator, setReceivElevator] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:3001/check/${username}`).then((response) =>{
            setInfoList(response.data)
            setProjectNum(response.data[0].projectNum)
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
            if(response.data[0].engineer !== null ){
                setAddEngineer(true)
                
                setEngineer(response.data[0].engineer)
            }
            if(response.data[0].electricCompany !== null){
                
                setElectricCompany(response.data[0].electricCompany.split('T')[0])
            }
            if(response.data[0].standardsInstitute !== null){
                setStandardsInstitute(response.data[0].standardsInstitute.split('T')[0])
            }
            if(response.data[0].receivElevator !== null){
                setReceivElevator(response.data[0].receivElevator.split('T')[0])
            }
            if(response.data[0].notNeedEngineer !== null){
                setNoEngineer(true)
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
     
        alert("???????? ???????????? ???? ????????????")
        
    }
    const dateOfElectric = () =>{
        Axios.post(`http://localhost:3001/dateOfElectric/${username}`,{
            electricCompany: electricCompany
        });
        alert(electricCompany)
        setElectricCompany(electricCompany)
    }
    const dateOfStandardsInstitute= ()=>{
        Axios.post(`http://localhost:3001/dateOfStandards/${username}`,{
            standardsInstitute: standardsInstitute
        });

        setStandardsInstitute(standardsInstitute)
    }
    const dateOfReceivElevator = ()=>{
        Axios.post(`http://localhost:3001/receivElevator/${username}`,{
            receivElevator: receivElevator
        });
        setReceivElevator(receivElevator)
    
    }
    
   
    
   
    const planning =  () =>{
        
        Axios.post(`http://localhost:3001/planning/${username}`)
        setPlanning(true)
         
    }
    const procurement =()=>{
        Axios.post(`http://localhost:3001/procurement/${username}`)
        setProcurement(true)
  
        
    }
    const togglePopup=()=>{
        setPopup(!popupOpen)
    }
   
    const addEngineer = () =>{
        Axios.post(`http://localhost:3001/addEngineer/${username}`,{
            engineer:engineer
        });
        setAddEngineer(true)
        alert('???? ???????????? ???????? ????????????')
    }
    const no_engineer=()=>{
        Axios.post(`http://localhost:3001/notNeed/${username}`)
        setNoEngineer(true)
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
            Axios.post(`//localhost:3001/upload/${username}`,data).then((e)=>{
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
        <nav className='logout'>
            <Link to='/??????????????' replace className='nav-links-logout'>
                ??????????
            </Link>
            
        </nav>
            
            <h1 className='title'>?????????? ?????????? ??{username}</h1>
            {A? <div className='map'>{info.map((val)=>{ return <h1 className='font-info'> ???????? ????????????: {val.workOffice} <br/>
                  ?????????? ?????????? ????????: {val.dateSignature.split('T')[0] } <br/>
                  ?????????? ??????: {val.endDate.split('T')[0]}<br/>
                  ?????? ????????????: {val.elevatorType}
                 
                  </h1> 
                })}</div>:<div className='levelA'>
                    <form className='form-update'>
                        <h1 className='title'>?????????? ???????? ?????????? ????????-?????? ??</h1>
                        <div className="input_field">
                            <input name="workOffice" placeholder="???????? ?????????? ????????????" type="number" value={workOffice} onChange={e => setWorkOffice(e.target.value)}/><br/>
                        </div>
                        <div className="input_field">
                            <label for='dateSignature'>?????????? ?????????? ????????</label><br/>
                            <input name="dateSignature" placeholder="?????????? ?????????? ??????????" type="date" value={dateSignature} onChange={e => setDateSignature(e.target.value)}/><br/>
                        </div>
                        <div className="input_field">
                            
                            <select name="elevatorType" placeholder='?????? ????????????' type="text" onChange={e => setElevatorType(e.target.value)}>
                                <option value="">?????? ?????? ??????????</option>
                                <option value="MRL" >MRL</option>
                                <option value="Hydraulic" >Hydraulic</option>
                                <option value="maalon">??????????</option>
                                
                            </select>
                        </div>
                        <div className="input_field">
                            <label for='endDate'>?????????? ?????? ????????????</label><br/>
                            <input name="endDate" placeholder='?????????? ?????? ??????????????' type="date" value= {endDate} onChange ={e => setEndDate(e.target.value)}/>
                        </div>
                        
                        <button className='butt' onClick={updateA}>???????? ?????? ??</button>
                        
                    </form> </div>}
                    <div>
                        
                        {popupOpen && <Popup
                        handleClose={togglePopup}
                        content={
                            <div> 
                                <h2>???? ????????????</h2>
                                <form className='form-update'>
                                <input name="engineer" type="text" value= {engineer} onChange ={e => setEngineer(e.target.value)}/>
                                <button onClick={addEngineer}>????????</button>
                                </form>
                            </div>
                        }/>}
                    </div>
                    
            <div className='engineer'>
              
            {addEngin | noEngineer ?  <div> {noEngineer? <h1>?????????????? ???? ???? ???????? ???????? ??????????</h1> : <h1>???? ????????????- {engineer}</h1>}</div> :<div>
                    <p className='ans'>??????? ???????? ???????? ??????????</p>
                    <div>
                       <button className='btn-PD' onClick={togglePopup}>????</button>
                       <button className='btn-PD' onClick={no_engineer}>????</button>
                    </div>
                    
                </div> }
                
                
              
            </div>
            <div className='levelB'>
                <h1 className='title'>?????? ??</h1>
                {Planning ? <div><h1 className='font-info'>?????? ???????????? ?????? ?????????? ???????? <i className="fas fa-check-square"></i></h1> </div> :<div>
                    <h1 className='font-info'>?????? ?????? ???? ?????????? ???????????? ?????? ?????????? </h1>
                    <button className='btn-PD' onClick={planning}>????????????</button>
                </div> }
                {Procurement ? <div>
                    <h1 className='font-info'>?????????? ???????? ???????? <i className="fas fa-check-square"></i></h1>
                </div> :<div><h1 className='font-info'>?????? ?????? ?????????? ???? ???? ???????????? ????????????</h1>
                <button className='btn-PD' type='submit' onClick={procurement}>?????????? ??????</button></div> }

            </div>

            <div className='levelC'>
                <h1 className='title'>?????? ?? - ???????????? ??????????</h1>
                {workPlan? <div className='work-plan'>
                
                <div className='view-pdf'>
                  <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js'>
                    <Viewer fileUrl= {fileWork}/>  
                  </Worker>
                </div>
            </div>:<div>
                <h3 >???????? ???????? ?????? ?????????????? ???? ?????????????? ?????????? ???????? </h3>
                <h3>?????? ???? ?????? ?????????? ?????? ???????? ??????????????</h3>
                <h4>numOfProject.pdf</h4>
                <div className='container-PD'>
                    <br></br>
                    <form className='form-group' onSubmit={handlePdfFileSubmit}>
                        <input type ="file" className='form_control'
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
                </div>}
            </div>
            <div className='levelD'>
                <h1 className='title'>?????? ??</h1>
                
                <div className='card-D'>
                <h2>???????? ???????? ???????? 4 ?????????? ?????????? </h2>
                <h3>?????????? ?????????? ???????????? ???????? ??????????</h3>
                <form className='elec-data'>
                        <div className="input_field">
                            <label for='standardsInstitute'>:?????????? ???????????? ???????? ???????????? {standardsInstitute}</label><br/>
                            <input name="standardsInstitute" type="date" value={standardsInstitute} onChange={e => setStandardsInstitute(e.target.value)}/><br/>
                        </div>
                        <button className='btn-PD' onClick={dateOfStandardsInstitute}>????????/????????</button>
                    </form>
                </div>
                <div className='card-D'>
                <h2>???????? ???????? ???? ?????????????? ?????????????? ?????????? ???????????? </h2>
                <h3>?????????? ?????????? ?????????? </h3>
                    <form className='elec-data'>
                        <div className="input_field">
                            <label for='electricCompany'>?????????? ?????????? 4: {electricCompany}</label><br/>
                            <input name="electricCompany" type="date" value={electricCompany} onChange={e => setElectricCompany(e.target.value)}/><br/>
                        </div>
                        <button className='btn-PD' onClick={dateOfElectric}>????????/????????</button>
                    </form>
                </div>
                

            </div>
            <div className='levelE'>
                <h1 className='title'>?????? ??- ???????? ????????????</h1>
                <h3>???????? ?????????? ???? ?????????????? ???? ???? ?????????????? ??????????????, ???????? ???? ?????? ???????? ?????? ?????????? ????????????</h3>
                <form className='elec-data'>
                        <div className="input_field">
                            <label for='receivElevator'>?????????? ?????? ???????? ???????????? : {receivElevator}</label><br/>
                            <input name="receivElevator" type="date" value={receivElevator} onChange={e => setReceivElevator(e.target.value)}/><br/>
                        </div>
                        <button className='btn-PD' onClick={dateOfReceivElevator}>????????/????????</button>
                    </form>

                
            </div>
    
        </div>

    );
}
export default ProjectDetails

/*<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
                                <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]}></Viewer>
                            </Worker></>
                            <button onClick={stageB}>???????????? ???????? ??</button> */