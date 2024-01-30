import React, { useState } from "react"

import './App.css'
import InputForm from './Components/InputForm'
import ToDo from "./Components/ToDo"
import { TodoProvider } from "./contexts/TodoContext"

function App() {
  

  const [todos, setTodos] = useState([])

  function addTodos(todo){
    setTodos((prev) => {
      return [{id: Date.now(), todo},...prev ]
    })
    
  }
  
  function handleDelete(id){
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <TodoProvider value = {{todos, addTodos, handleDelete}}>
      <div className=' rounded-3xl w-full max-w-96 mx-auto mt-4 p-3 h-[90vh] bg-yellow-400 '>
        <div>
          <h1 className=' text-center text-xl font-bold '>To Do List</h1>
        </div>
        <br />
        <InputForm/>
        <div className=' mt-5'>
          <ul className='p-2 '>
            {todos.map((todo) => (
              <li key={todo.id} className=' flex gap-2 items-center justify-between my-2'>
                <ToDo todo = {todo}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
