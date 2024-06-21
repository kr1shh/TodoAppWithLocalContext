import { TodoProvider } from "./contexts"
import { useEffect, useState } from "react"
import {TodoForm,TodoItem} from "./components"
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [ todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=> [{
      id : Date.now(),
      ...todo
    },...prev])

    toast.success("Todo Added")
  }

  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === todo.id ? todo : prevTodo)))

    toast.success("Saved")
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>(
      prev.filter((prevTodo)=>(prevTodo.id !== id))
    ))

    toast.error("Todo Deleted")
  }

  const togglComplete = (id) => {
    toast.success("Completed")
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

      <Toaster
      position="top-right" />

      <div
      className="w-full h-screen flex flex-col items-center justify-start bg-blue-950">
        <h1
        className="text-white text-3xl font-bold mb-5 mt-10">
          Manage Your Todos.
        </h1>
        <TodoForm/>
        {
          todos.map((todo)=> (
            <div key={ todo.id }>
              <TodoItem todo={ todo }/>
            </div>
          ))
        }
      </div>
    </TodoProvider>
  )
}

export default App