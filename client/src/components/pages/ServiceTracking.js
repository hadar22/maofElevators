import React,{useState, useEffect} from 'react'
//import '../../App.css'
import './ServiceTracking.css'
import {addDoc, collection, FieldValue, doc, setDoc, getDocs,deleteDoc} from 'firebase/firestore'
import {db} from '../../firebase-config'
import Popup from '../Popup'
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); 


function ServiceTracking(){
    const [date, setDate] = useState('')
    const [serviceType, setType] = useState('')
    const [placesList, setPlacesList ] = useState([])
    const [name, setName] = useState('')
    const [id_now, setId] = useState("")
    const [id_now_add, setIdAdd] = useState("")

    const [popupOpen,setPopup] = useState(false)
    const [popupOpenAdd,setPopupAdd] = useState(false)

    
    const createService =  async ()=>{
        const serCollectionRef = doc(db, "serviceTracking", id_now_add)
        await setDoc(serCollectionRef , {[date] : serviceType} ,{merge: true})
        setPopupAdd(!popupOpenAdd)
    }
    useEffect(()=>{
        const getPlacesList = async ()=>{
            const data = await getDocs(collection(db,"serviceTracking"))
            setPlacesList(data.docs.map((doc)=>({...doc.data(),id:doc.id.toString(),date: Object.keys(doc.data()),count: counter(Object.keys(doc.data()))})))
            
            
            ///console.log("list",placesList)
        }
        
        getPlacesList()


    },[])
    const togglePopup =(Id)=>{
        setId(Id)
        
        setPopup(!popupOpen)
    }
    const togglePopupAdd = (Id)=>{
        setIdAdd(Id)
        setPopupAdd(!popupOpenAdd)
    }
    const counter = (arr)=>{
        const yearNow = new Date()
        const y = yearNow.getFullYear()
        let c = 0
        for(let i= 0; i< arr.length; i++){
            let year = arr[i].split('-')[0]
            if(year == y){
                c=c+1
            }
        }
        return c
         
    
    }
    const FindLastDate=(arr)=>{
        //let [y,m,d] = arr[0].split('-')
        let tmp = arr[0]
        console.log(arr)
        for(let i = 1 ; i<arr.length; i++){
            let [y,m,d] = tmp.split('-')
            let [year,month,day] = arr[i].split('-')
            if(y<year ){
                tmp  = ''
                tmp = arr[i]
                
            }
            if(y == year && m < month){
                tmp  = ''
                console.log("if2", arr[i])
                tmp = arr[i]
                

            }
            if(y == year && m == month && d <day){
                
                tmp = ''
                tmp = arr[i]
                

            }

        }
        console.log('tmp', tmp)
        return tmp

       
    } 
    const deleteProject=()=>{
        
        deleteDoc(doc(db, "serviceTracking", id_now));
        setPopup(!popupOpen)
        
    }
    const state = {
        labels: placesList.map((doc)=>doc.id),
        datasets: [
          {
            label: 'מספר ביקורים',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: placesList.map((doc)=>doc.count)
          }
        ]
      }
    const add=async()=>{
        const serCollectionRef = doc(db, "serviceTracking", name)
        await setDoc(serCollectionRef ,{})
        setName('')
        alert("נוסף בהצלחה!")

    }
    return(
        <div className='service-tracking'>
            <h1 className='title'>מעקב אחרי שירות</h1>
            <div className='add_new_project'>
                <h1>הוסף פרויקט חדש שלא מופיע ברשימה</h1>
                <from>
                   <input name='name' placeholder='שם הפרויקט - רחוב+מספר' value={name}  onChange={(e)=>{setName(e.target.value)}}/>
                   <button className='btn-ap' onClick={add} >הוסף פרויקט</button>

                </from>
                
            </div>
            <div className='list-place'>
                
             {placesList.map((val)=>{
                 return(
                     <div className='values' key={val.id}>
                         <h1 className='place' >{val.id}</h1>
                         <h3 className='last-date'> תאריך אחרון שהיינו שם: {FindLastDate(val.date)}</h3>
                         <h3 className='count'>מספר ביקורים השנה: {val.count}</h3>
                         <div className='btns-add-del'>
                             <button className='btn-add'  onClick={()=>{togglePopupAdd(val.id)}}>הוסף ביקור</button>
                             <button className='btn-delete' onClick={()=>{togglePopup(val.id)}}>מחק פרויקט זה</button>
                        
                         </div>
                         <div>
                            {popupOpen && <Popup handleClose={togglePopup} 
                            content={
                            <div>
                                <h3>אתה בטוח רוצה למחוק?{id_now}</h3>
                                <div>
                                    <button onClick={deleteProject}>כן</button>
                                    <button onClick={togglePopup}>לא</button>
                                </div>
                             </div>
                             }/>}
                         </div>
                         <div>
                             {popupOpenAdd && <Popup handleClose={togglePopupAdd}
                             content={
                                 <div>
                                     <div className='input-service'>
                                        <label>תאריך</label>
                                        <input placeholder='date' type='date' onChange={(e)=>{setDate(e.target.value)}}/>
                                     </div>
                                     <div className='input-service'>
                                        <label>סוג טיפול</label>
                                        <input  onChange={(e)=>{setType(e.target.value)}}/>

                                     </div>
                                     <button className='btn-ST' onClick={createService} type='submit'>שמור</button>
                                 </div>

                             }/>}
                         </div>
                     </div>
                    
                 )
             })}
            </div>
            
            <div className='graphh'>
                <h3 className='title_graph'>כמות ביקורים במהלך השנה הנוכחית</h3>
            <Bar 
          data={state}
          options={{
            
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
               
            </div>
            
        </div>
    );
}
export default ServiceTracking