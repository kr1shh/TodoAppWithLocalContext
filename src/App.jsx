import { TodoProvider } from "./contexts"
import { useState } from "react"

function App() {

  const [ todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=> [{
      id : Date.now(),
      ...todo
    },...prev])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>(
      prev.filter((prevTodo)=>(prevTodo.id !== id))
    ))
  }

  const togglComplete = (id) => {
    setTodos((prev)=>(
      prev.map((prevTodo)=>
        prevTodo.id === id ? {
          ...prevTodo,
          completed : !prevTodo.completed
        } :
          prevTodo,
      )
    ))
  }


  return (
    <TodoProvider value={{ todos,addTodo,updateTodo,deleteTodo,togglComplete }} >
      <h1>Hello</h1>
    </TodoProvider>
  )
}

export default App