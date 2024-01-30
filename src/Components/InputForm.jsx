import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function InputForm() {

    const [inputValue, setInputValue] = useState("")
    const {addTodos} = useTodo()

    function handleChange(event){
        let input = event.target.value
    
        setInputValue(input)
      }

    const add = (e) => {
        e.preventDefault()

        if (!inputValue) return
        
        addTodos(inputValue)
        setInputValue("")
    }

    return (
        <form onSubmit={add} className='flex gap-3 my-3'>
            <input
                type="text"
                className=' bg-transparent outline-none   w-4/5 border-b p-1 border-black placeholder:text-slate-500 placeholder:px-1'
                placeholder='Enter your to-do'
                onChange={handleChange}
                value={inputValue}
            />
            <button className='p-1 outline-none px-4 rounded-md bg-black text-yellow-400 hover:bg-slate-600 transition-colors ' >Add</button>
        </form>
    )
}

export default InputForm