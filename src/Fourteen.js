import React , {useState} from 'react'

const Fourteen = ({items}) => {

    const[searchTerm,setSearchTerm] =useState('')
    const filteredItems = items.filter((item)=>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    <div>
        <input type='text' placeholder='Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <ul>
            {
                filteredItems.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}
export default Fourteen;
