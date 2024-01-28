import React, { useState } from "react"

function InputForm(props) {

    const [inputValue, setInputValue] = useState("")

    function handleChange(event){
        let input = event.target.value
    
        setInputValue(input)
      }

    return (
        <div className='flex gap-3 my-3'>
            <input
                type="text"
                className=' bg-transparent outline-none   w-4/5 border-b p-1 border-black'
                placeholder='Enter your to-do'
                onChange={handleChange}
                value={inputValue}
            />
            <button className='p-1 outline-none px-4 rounded-md bg-black text-yellow-400 hover:bg-slate-600 transition-colors ' onClick={() => {
                props.onAdd(inputValue)
                setInputValue("")
            }}>Add</button>
        </div>
    )
}

export default InputForm