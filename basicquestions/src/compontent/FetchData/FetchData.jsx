import React, { useEffect, useState } from 'react'

function FetchData() {
    const[data,setData]=useState(null);
    useEffect((()=>
    {
        setTimeout(()=>{
            fetch(`https://api.github.com/users/Satyamray21`)
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error => console.error('Error fetching data:', error));
        },5000)
        
    }),[])

    return (
        <div>
            {data ? (
                <div>
                    <h1>Name:{data.name}</h1>
                    <p>{data.bio}</p>
                    <p>{data.id}</p>
                    <p>{data.followers}</p>
                    <img src={data.avatar_url} alt={`${data.name}'s avatar`} width={100} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}


export default FetchData
