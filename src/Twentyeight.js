import React,{useReducer} from 'react'

const initialState = {
    currentImageIndex:0
}

const imageReducer = (state,action)=>{
        switch(action.type)
        {
            case 'NEXT_IMAGE':
                return {
                    currentImageIndex:state.currentImageIndex+1
                }
            case 'PREVIOUS_IMAGE':
                return{
                    currentImageIndex:state.currentImageIndex-1
                }    
            default:
                return state;
        }
}

const images = ['','','']//Put image Link

export default function Twentyeight(){
    const [state,dispatch] = useReducer(imageReducer,initialState);
    const currentImage=images[state.currentImageIndex]
    return (
        <div>
            <h1>Image Gallery</h1>
            <div>
                <img src= {currentImage}/>
            </div>
            <div>
                <button onClick={()=>dispatch({type:'PREVIOS_IMAGE'})}>Previous</button>
                <button onClick={()=>dispatch({type:'NEXT_IMAGE'})}>Next</button>
            </div>
        </div>
    )
}