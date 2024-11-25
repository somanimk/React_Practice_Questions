import React from 'react'

const Four = () => {

  const items=['Items 1','Items 2','Items 3','Items 4','Items 5']
  return (
    <ul>
        {items.map((item,index)=>
        (
         <li key={index}>{item}</li>
        ))}
    </ul>
  )
}
export default Four;