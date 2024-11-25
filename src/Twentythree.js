import React from 'react'
import { useAuth } from './AuthContext'

 const Twentythree = () => {

    const {user,login,logout }=useAuth();
  return (
    <div>
        <h1>User Authentication</h1>
        {
            user?(<div>
            <p>Welcome,{user} </p>
            <button onClick={logout}>Logout</button>
        </div>):(<button onClick={()=>login('user12345')}>Login</button>)
        }
    </div>
  )
}

export default Twentythree
