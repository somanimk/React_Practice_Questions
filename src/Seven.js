import React, { useEffect, useState } from 'react';

 const Seven = () => {
    const[time,setTime]=useState(5);
    useEffect(()=>{
        if(time>0)
        {
            const timer=setTimeout(()=>setTime(time-1),1000);
            return()=>clearTimeout(timer)
        }
    },[time])
  return (
    <div>
        Time Left:{time} second
    </div>
  )
}
export default Seven;