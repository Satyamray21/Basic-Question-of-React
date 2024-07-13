import React, { useState } from 'react'

function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const manage = (e)=>{
        e.preventDefault();
        if(username !== '' && password !== '')
        {
            setIsLoggedIn(true);
        }
        else
        {
            setIsLoggedIn(false);
            setPassword('');
            setUsername('');
        }
    }
  return (
    <>
    {isLoggedIn?(
        <p>Welcome {username}!</p>
    ):(
        
        <form onSubmit={manage}>
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
        <button>Submit</button>
        </form>
    )
    }
    </>
    
    
  )
}

export default Login
