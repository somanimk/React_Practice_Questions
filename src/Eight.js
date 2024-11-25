import React, {useState} from 'react'

const Eight = () => {
    const[backgroundColor,setBackgroundColor] = useState('yellow');
    const handlerClick=()=>{
        const newColor = backgroundColor==="yellow"?'lightblue':'yellow';
        setBackgroundColor(newColor)
    }
  return (
    <div onClick={handlerClick}
    style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>Click me to Change Color</div>
  )
}

export default Eight;



