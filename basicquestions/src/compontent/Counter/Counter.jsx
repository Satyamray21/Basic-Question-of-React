import React, { useState } from 'react'

export default function Counter() {
    const[counter,setCounter]=useState(0);
    const addValue = () =>{
        setCounter(counter+1);
    }
    const deleteValue = () =>{
        if(counter>0)
        {
            setCounter(counter-1);
        }
        else
        {
            alert("Counter has reached minimum Value");
        }
        
    }

  return (
    <div>
        <h1>Counter {counter}</h1>
      <button onClick={addValue} 
      >Add Value</button><br/>
      <button onClick={deleteValue} 
      >Delete Value</button>
    </div>
  )
}
