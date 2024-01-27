import { useState } from 'react'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")

  const [items, setItems] = useState([])

  function handleChange(event){
    let input = event.target.value

    setInputValue(input)
  }

  function addItems(){
    setItems((prev) => {
      return [...prev, inputValue]
    })
    setInputValue("")
  }
  
  function handleDelete(i){
    let copyItems = [...items]
    copyItems.splice(i,1)
    setItems(copyItems)
    // let newItems = items.filter((item)=> )
  }

  return (
    <div className=' rounded-3xl w-full max-w-96 mx-auto mt-4 p-3 h-[90vh] bg-yellow-400 '>
      <div>
        <h1 className=' text-center text-xl font-bold '>To Do List</h1>
      </div>
      <br />
      <div className='flex gap-3 my-3'>
        <input 
        type="text" 
        className=' bg-transparent outline-none   w-4/5 border-b p-1 border-black'
        placeholder='Enter your to-do'
        onChange={handleChange}
        value={inputValue}
        />
        <button className='p-1 outline-none px-4 rounded-md bg-black text-yellow-400 hover:bg-slate-600 transition-colors ' onClick={addItems}>Add</button>
      </div>
      <div className=' mt-5'>
        <ul className='p-2 '>
          {items.map((item,i) => <li key={i} id={i} className=' flex gap-2 items-center justify-between my-2'>
          <div className='flex gap-2 items-center'>
          {/* <input type="checkbox" /> */}
          <p>{item}</p>
          </div>
          <div>
          {/* <button className=' bg-slate-500 rounded-md px-3 mx-2'>Edit</button> */}
          <button onClick={()=>{
            handleDelete(i)
            }} className=' cursor-pointer rounded-md bg-gray-300 px-1 '>❌</button>
          </div>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
