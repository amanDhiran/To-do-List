import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { MdDelete } from "react-icons/md";

function ToDo({todo}){

    const [isChecked, setIsChecked] = useState(false)
    const {handleDelete} = useTodo()
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    function handleClick(){
        setIsChecked((prev)=>{
            return !prev
        })
    }

    return (
        <>
          <div className='flex gap-2 items-center'>
          <input onChange={handleClick} type="checkbox" />
          <p className={`${isChecked? "text-gray-600" : "text-black"}`} style = {{ textDecoration: isChecked ? "line-through" : "none"}}>{todoMsg}</p>
          </div>
          <div>
          {/* <button className=' bg-slate-500 rounded-md px-3 mx-2'>Edit</button> */}
          <button onClick={()=>{
            handleDelete(todo.id)
            }} className=' cursor-pointer text-xl text-red-600  '><MdDelete /></button>
          </div>
        </>
    )
}

export default ToDo