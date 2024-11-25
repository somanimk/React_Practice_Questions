import React, { useState } from 'react'
import './styles/Seventeen.css'

const Seventeen = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
         =
        </button>
        <ul className={`menu ${isOpen?'open':'close'}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
        </ul>
    </div>
  )
}
export default Seventeen;
