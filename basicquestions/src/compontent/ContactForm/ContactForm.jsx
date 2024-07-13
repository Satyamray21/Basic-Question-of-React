import React, { useState } from 'react'

function ContactForm() {
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
const show = (e)=>{
    e.preventDefault();
    if(name!== '' && password !=='' && email !== '')
    {
        console.log(`Name : ${name}\n Password ${password} \n Email:${email}`);
    }
   
    
        setEmail('');
        setName('');
        setPassword('');
    
}
  return (
    <>
    <h1>Form Handling</h1>
    <form  onSubmit={show}>
        <input type='text'
        placeholder='Enter your name'
        value={name}
        onChange={e=>setName(e.target.value)}
        />
        <input type='password'
        placeholder='Enter your Password'
        value={password}
        onChange={e=>setPassword(e.target.value)}
        />
        <input type='text'
        placeholder='Enter your mail'
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>

    </form>
      
    </>
  )
}

export default ContactForm
