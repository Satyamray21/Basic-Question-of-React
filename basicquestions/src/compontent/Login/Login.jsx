import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext';
function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const {setUser} = useContext(UserContext)
    const manage = (e)=>{
        e.preventDefault();
        setUser({username,password})
        setUsername('');
        setPassword('');
    }
  return (
    <>
    
        
        <form >
        <input type='text'
        placeholder='Enter your name'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br/>
        <br/>
        <input type='password'
        placeholder='Enter your Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <button onClick={manage}>Submit</button>
        </form>
    
    
    </>
    
    
  )
}

export default Login
