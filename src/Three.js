import React from 'react'
import { useState } from 'react'
 const Three = () => {
    const [formData,setformData]=useState({
        name:'',
        email:'',
        password:''
    })
    function changeHandler(event)
    {
        setformData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event)
    {
        event.preventDefault();
        console.log(formData)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Enter Name :
            <input 
                name="name"
                type="text"
                placeholder='Johan Wick'
                value={formData.name}
                onChange={changeHandler}
                required
            /></label>
            <br/>
            <label htmlFor="email">Enter Email :
            <input 
                name="email"
                type="email"
                placeholder='johnwick@gmail.com'
                value={formData.email}
                onChange={changeHandler}
            /></label>
            <br/>
            <label htmlFor="password">Enter Password :
            <input 
                name="password"
                type="password"
                placeholder='********'
                value={formData.password}
                onChange={changeHandler}
            /></label>  
            <br/>
            <input type="submit" value="Submit" /> 
        </form>
    </div>
  )
}

export default Three;

// The event.preventDefault() is used in the submitHandler function to prevent the default behavior of 
// the form submission. Normally, when a form is submitted, the browser refreshes the page. By calling 
// preventDefault(), you stop the page from reloading and allow the form data to be handled by JavaScript 
// (e.g., logged in the console or sent to a server) without losing the current page state.

// The reason you need prevData in the setformData function is to ensure that the state update maintains 
// the existing values of the other fields in the formData object while only updating the specific field
// that has changed.When you use setformData, you are updating the entire formData object, not just one
// field. Without prevData, you would overwrite the whole formData object, losing the other fields that 
// have already been filled out.