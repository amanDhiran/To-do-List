import React, { useState } from "react"

import './App.css'
import InputForm from './Components/InputForm'
import ToDo from "./Components/ToDo"

function App() {
  

  const [items, setItems] = useState([])

  function addItems(inputValue){
    setItems((prev) => {
      return [...prev, inputValue]
    })
    
  }
  
  function handleDelete(i){
    // let copyItems = [...items]
    // copyItems.splice(i,1)
    // setItems(copyItems)
    let newItems = items.filter((item, id)=>{
        return id !==i
    } )
    setItems(newItems)
  }

  return (
    <div className=' rounded-3xl w-full max-w-96 mx-auto mt-4 p-3 h-[90vh] bg-yellow-400 '>
      <div>
        <h1 className=' text-center text-xl font-bold '>To Do List</h1>
      </div>
      <br />
      <InputForm 
      onAdd={addItems}
      />
      <div className=' mt-5'>
        <ul className='p-2 '>
          {items.map((item,i) => (
          <ToDo 
          text = {item}
          id = {i}
          onDelete = {handleDelete}
          />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
