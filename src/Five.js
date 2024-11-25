import React, {useState} from "react";

export const Five = () => {
    const[isToggled,setIsToggles]= useState(false);
  return (
    <div>
        <label>
            <input type='checkbox' onChange={()=>(setIsToggles(!isToggled))}></input>
        </label>
        <p>{isToggled?"On":"Off"}</p>
    </div>
  )
}

export default Five;
