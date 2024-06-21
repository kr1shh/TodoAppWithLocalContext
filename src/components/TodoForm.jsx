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
        className="focus:outline-0 rounded-2xl w-[300px] sm:w-[600px] h-[50px] px-3 bg-slate-400 text-white placeholder:text-white"
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
         />

         <button
         type="submit"
         className="bg-green-500 text-white rounded-2xl p-[13px] hover:bg-green-600 ml-1">Add</button>
      </form>
    </>
  )
}

export default TodoForm