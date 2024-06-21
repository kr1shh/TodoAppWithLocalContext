import { TodoProvider } from "./contexts"
import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

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


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if( todos&&todos.length>0 ){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos,addTodo,updateTodo,deleteTodo,togglComplete }} >
      <div
      className="w-full h-screen flex flex-col items-center justify-center bg-blue-950">
        <h1
        className="text-white text-2xl font-bold mb-5">
          Manage Your Todos.
        </h1>
        <TodoForm/>
        <TodoItem/>
      </div>
    </TodoProvider>
  )
}

export default App