import React, { useReducer,useEffect } from 'react'


const itemsPerPage=10;

const paginationReducer = (state,action)=>{
    switch(action.type)
    {
        // case'SET_TOTAL_ITEMS':
        //     return{...state,totalItem:action.payload}
        case'SET_CURRENT_PAGE':
            return{...state,currentPage:action.payload}
        default:
            return state    
    }
}

 const Twentytwo = () => {

    const[paginationState,dispatch]=useReducer(paginationReducer,{currentPage:1})
    const data=Array.from({length:30},(_,index)=>`Item  ${index+1}`);

    // Array.from(arrayLike, mapFunction, thisArg);

    // useEffect(()=>{
    //     dispatch({type:`SET_TOTAL_ITEMS`,payload:data.length})
    // },[data])

    const startIndex=(paginationState.currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = data.slice(startIndex,endIndex);

    const handlePageClick=((newpage)=>{
        dispatch({type:'SET_CURRENT_PAGE',payload:newpage})
    })
    return (
    <div>
        <h1>Pagination Example</h1>
        <ul>
            {displayedItems.map((item,index)=>
                <li key={index}>
                    {item}
                </li>
            )}
        </ul>
        <div>
            <button onClick={()=>handlePageClick(paginationState.currentPage-1)} disabled={paginationState.currentPage===1}>Previous</button>
            <button onClick={()=>handlePageClick(paginationState.currentPage+1)} disabled={endIndex>=data.length}>Next</button>
        </div>
    </div>
  )
}

export default Twentytwo;
