import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg"
        }
    ],
    addTodos: (todo) =>{},
    handleDelete: (id) =>{}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider