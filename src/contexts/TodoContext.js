import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos :[
        {
            id : 1,
            message : "testing",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deletTodo : (todo) => {},
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider