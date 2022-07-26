import React,{useEffect, useState} from 'react'
import '../../App.css'
import './Manager.css'
import Axios from 'axios'
import {useHistory, Link}from 'react-router-dom'
import Popup from '../Popup'

function Manager(){
    let history = useHistory()
    const [popupOpen,setPopup] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword]=useState('')
    const [contact, setContact]=useState('')
    const [phonNum, setPhonNum]= useState('')

  
   
    const [usernameList, setUsersList] = useState([])
    //display in table
    
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setUsersList(response.data)
            
        })
    }, []);
    //send data to database
    const add = async () => {
        Axios.post('http://localhost:3001/add',{
            username: username,
            password: password,
            phonNum: phonNum,
            contact:contact});
             
        setUsersList([...usernameList, {username:username, password: password},]);
            
    };
    
    
    const deleteUser = (user) => {
        console.log(`user ${user}`);
        Axios.delete(`http://localhost:3001/deleteUser/${user}`).then(() => {
            setUsersList(
            usernameList.filter(val => {return val.password !== user})
          )
        }).catch(err => {
            console.error(err);
        })
        Axios.delete(`http://localhost:3001/deleteInfo/${user}`)
        
    };
    const togglePopup =()=>{
    
      setPopup(!popupOpen)
    }
    const service =()=>{
      history.push('/מעקב שירות')
    }
    

    return (
    
         <div className='manager'>
           <nav className='logout'>
            <Link to='/התחברות' replace className='nav-links-logout'>
                התנתק
            </Link>
            
        </nav>
        <div className='grid-btn'>
          <button className='add_project-btn' onClick={togglePopup}>
          הוספת פרויקט חדש<i className='fa fa-plus-circle'></i>
          </button>
          <button className='btn-service' onClick={service}>מעקב אחרי שירות</button>
        </div>
          
         
         <div>
           {popupOpen && <Popup handleClose={togglePopup}
           content={
             <div className='add_user'>
                <form className='form-add_user'>  
                 <h1 className='title-add' > הוסף לקוח חדש </h1>
                 <div className="input_field">
                   <label  for="username">שם הפרויקט </label><br/>
                   <input name="username" placeholder="כתובת_מספר_עיר" type="text" value={username} onChange={e => setUsername(e.target.value)}/><br/>
                 </div>
                 <div className="input_field">
                   <label  for="password">סיסמא </label><br/>
                   <input name="password" placeholder="מספר תיק" type="text" value={password} onChange={e => setPassword(e.target.value)}/><br/>
                 </div>
                 <div className="input_field">
                   <label  for="contact">איש הקשר</label><br/>
                   <input name="contact" placeholder='שם מלא' type="text" value={contact} onChange={e => setContact(e.target.value)}/><br/>
                 </div>
                 <div className="input_field">
                   <label  for="phonNum">טלפון</label><br/>
                   <input name="phonNum" placeholder='טלפון איש קשר' type="text" value= {phonNum} onChange ={e => setPhonNum(e.target.value)}/><br/>
                 </div>
                 
  
                 <button className='butt' onClick={add} type='submit'> הוסף</button>
                 
                </form>
             </div>
           }/>}
         </div>
             
             
             <div className='update-projects'>
                 <h1 className='title'> עדכון נתוני פרויקט</h1>
                 <div className='grid-projects'>
                    {usernameList.map((val)=>{
                        return (
                        <div className='users-card'> 
                           {val.password} <br/>
                           {val.username} 
                           <div className='btns'>
                               <button className='btn-del' onClick={() => {
                               deleteUser(val.password);}} >
                               מחק<i className="fas fa-trash"></i>
                               </button>
                            <button className='btn-update' onClick={()=>{history.push(`/עדכוןפרטים/${val.username}`)}}>עדכן<i className="fas fa-pen"></i></button>
                           </div>
                       </div>
                       )
                    })}

                  </div>
                  
            </div>
            
        </div>
        
    );
       

    
}
export default  Manager

