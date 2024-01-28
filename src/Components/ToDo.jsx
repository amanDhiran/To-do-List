import React, { useState } from "react";


function ToDo(props){

    const [isChecked, setIsChecked] = useState(false)

    function handleClick(){
        setIsChecked((prev)=>{
            return !prev
        })
    }

    return (
        <li key={props.id} id={props.id} className=' flex gap-2 items-center justify-between my-2'>
          <div className='flex gap-2 items-center'>
          <input onChange={handleClick} type="checkbox" />
          <p style = {{ textDecoration: isChecked ? "line-through" : "none"}}>{props.text}</p>
          </div>
          <div>
          {/* <button className=' bg-slate-500 rounded-md px-3 mx-2'>Edit</button> */}
          <button onClick={()=>{
            props.onDelete(props.id)
            }} className=' cursor-pointer rounded-md bg-gray-300 px-1 '>❌</button>
          </div>
          </li>
    )
}

export default ToDo