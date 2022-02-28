import React, { useEffect, useState } from 'react'
import '../../App.css'
import './Home.css'
import './Login.css';
import Axios from 'axios'

function Login() {
  
    const [username, setUsername] = useState('')
    const [password, setPassword]=useState('')
    const [usernameList, setUsersList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setUsersList(response.data)
        })
    }, []);

    const login = () =>{
        Axios.post('http://localhost:3001/api/insert',
         {username: username, password: password}).then(()=>{
             alert('successful insert')

         });

    };
        
    return (
        <div className='login'>
            <h2 className='title'> השם משתמש והסיסמא שקיבלתם מהחברה</h2>
            <input name="username" placeholder="שם משתמש" type="text" value={username} onChange={e => setUsername(e.target.value)}/><br/>
            <input name="password" placeholder="סיסמא" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>התחבר </button>

            {usernameList.map((val)=>{
                return <h1> Username: {val.username} | Password: {val.password} </h1>

            })}
            
        </div>

    );
}
export default Login