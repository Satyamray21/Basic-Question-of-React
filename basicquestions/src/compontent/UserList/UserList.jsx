import React from 'react'

function UserList() {
    const user=['Satyam','Rahul','Alice','Msd','Ram']
  return (
    <div>
        <ul>
        {user.map((names,index)=>(
            <li type='number' key={index}>{names}</li>

        ))
        }
        </ul>
      
    </div>
  )
}

export default UserList
