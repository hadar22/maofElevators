import React,{useEffect, useState} from 'react'
import '../../App.css'
import './Manager.css'
import Axios from 'axios'
import {useHistory}from 'react-router-dom'

function Manager(){
    let history = useHistory()

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
    const update = (name) =>{
        
    }
    
    const deleteUser = (user) => {
        console.log(`user ${user}`);
        Axios.delete(`http://localhost:3001/api/delete/${user}`).then(() => {
            setUsersList(
            usernameList.filter(val => {return val.password !== user})
          )
        }).catch(err => {
            console.error(err);
        })
        
    };
    

    return (
    
         <div className='manager'>
             <div className='add_user'>
                 <h1> הוסף לקוח חדש </h1>
                 <input name="username" placeholder="שם הפרויקט -כתובת_עיר_מספר" type="text" value={username} onChange={e => setUsername(e.target.value)}/><br/>
                 <input name="password" placeholder="סיסמא-מספר תיק" type="text" value={password} onChange={e => setPassword(e.target.value)}/><br/>
                 <input name="contact" placeholder='שם איש הקשר' type="text" value={contact} onChange={e => setContact(e.target.value)}/><br/>
                 <input name="phonNum" placeholder='טלפון איש קשר' type="number" value= {phonNum} onChange ={e => setPhonNum(e.target.value)}/>
                
                 <button onClick={add}> הוסף</button>

             </div>
             <div className='update'>
                 <h1> עדכון נתוני פרויקט</h1>
                 {usernameList.map((val)=>{
                return (
                <div className='users-card'> 
                <h3>{val.password} </h3>
                <p>{val.username} </p>
                
                <button onClick={() => {
                    deleteUser(val.password);
                   
                    }}
                    >
                        מחק
                        </button>
                <button onClick={()=>{history.push(`/עדכוןפרטים/${val.username}`)}}>עדכן</button>
                </div>
                )
            })}

             </div>
             <button onClick={()=>{history.push()}}>הוספת תמונות לדף פרויקטים</button>
        </div>
    );
       

    
}
export default  Manager

