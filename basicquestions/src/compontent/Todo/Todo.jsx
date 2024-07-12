import React, { useState } from 'react'

function Todo() {
    const[item,setItem]=useState("");
    const[items,setItems]=useState([]);
    const add = () =>{
        if(item.trim()!=="")
        {
            setItems([...items,item]);
           
        }
        setItem('');
    }
    const removeItem= (index) =>{
        if(setItems('')!=='')
        {
           const newItem = [...items];
            newItem.splice(index,1);
            setItems(newItem);
        }
    }
  return (
    <div>
        <h3>Todo list.</h3>
      <input type='text'
      placeholder='Enter name to items'
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      />
      <button onClick={add}>Add items</button>
      <ul>
      {items.map((item, index) => (
                    <li key={index}>{item}<button onClick={()=>removeItem(index)}>Delete</button> </li> 
                ))}

      </ul>
     
    </div>
  )
}

export default Todo
