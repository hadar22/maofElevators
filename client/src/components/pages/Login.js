import React, { useEffect, useState } from 'react'
import '../../App.css'
import './Home.css'
import './Login.css';
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {
    let history = useHistory()
  
    const [username, setUsername] = useState('')
    const [password, setPassword]=useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const [usernameList, setUsersList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setUsersList(response.data)
        })
    }, []);

    const login = () =>{
        Axios.post('http://localhost:3001/login',{
            username: username,
            password: password,}).then((response)=>{
                if (response.data.message){
                    setLoginStatus(response.data.message);
                }else{
                    setLoginStatus(response.data[0].username);
                    if(response.data[0].username==='manager'){
                        history.push("/Manager")
                    }
                    else{
                        history.push(`/כניסת משתמש/${username}`)
                    }
                }

         });

    };
        
    return (
        <div className='login'>
            <h2 className='title'> השם משתמש והסיסמא שקיבלתם מהחברה</h2>
            <input name="username" placeholder="שם משתמש" type="text" value={username} onChange={e => setUsername(e.target.value)}/><br/>
            <input name="password" placeholder="סיסמא" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>התחבר </button>
            <div>
                <h1>{loginStatus}</h1>
            </div>
           
            
        </div>

    );
}
export default Login