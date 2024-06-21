import { useState } from "react"
import { useTodo } from "../contexts"

const TodoForm = () => {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e)=>{
    e.preventDefault();
    if (!todo) return
    addTodo({todo});
    setTodo("");
  }
  return (
    <>
      <form
      onSubmit={ add }>
        <input 
        type="text"
        placeholder="Write Todo..."
        className="focus:outline-0 rounded-2xl w-[300px] sm:w-[600px] h-[50px] px-3"
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
         />

         <button
         type="submit"
         className="bg-white rounded-2xl p-[13px] hover:bg-blue-200 ml-1">Add</button>
      </form>
    </>
  )
}

export default TodoForm