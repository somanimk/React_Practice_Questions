import React, { useState,useEffect} from 'react'
import axios from 'axios'

const Twentysix = () => {

    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const result=await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                setData(result.data)
                const result1=await axios.get('https://jsonplaceholder.typicode.com/posts/2')
                setData1(result1.data)
            }
            catch(error)
            {
                console.error("Error fetching the Data:",error)
            }
        }
        fetchData();
    },[])
    console.log(data,data1)
   return (
    <div>

    </div>
  )
}

export default Twentysix
