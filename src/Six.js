import React from 'react'
import { useEffect, useState } from "react";
 const Six = () => 
    {
    const[data,setdata]=useState([]);
    const [error, setError] = useState(null);

    const url='https://jsonplaceholder.typicode.com/posts';
    async function fetchdata(){
        try{
            let response=await fetch(url);
            let result= await response.json();
            setdata(result)
        }
        catch(error)
        {
            setError("Network Error");
        }

    }
        useEffect(()=>{
            fetchdata();
        },[])
    return (
        <div>
            {data.length > 0 ? (
                data.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
    }

export default Six;


// No array: Runs after every render.
// Empty array: Runs only on initial render (once).
// Array with dependencies: Runs on initial render and when any dependency value changes.