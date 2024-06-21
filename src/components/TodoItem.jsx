import { useState } from "react"
import { useTodo } from "../contexts"


const TodoItem = ({todo}) => {

  const [ isTodoEditable, setIsTodoEditable ] = useState(false)
  const [ todoMsg,setTodoMsg] = useState(todo.todo)
  const { togglComplete,deleteTodo,updateTodo } = useTodo()

  const editTodo = ()=>{
    updateTodo(todo.id,{
      ...todo,
      todo:todoMsg,
    })
    setIsTodoEditable(false)
  }

  const togglCompleted =()=>{
    togglComplete(todo.id)
  }

  return (
    <>
      <div
      className={`animate-fadein transition duration-500 bg-white w-[350px] sm:w-[650px] h-[50px] rounded-2xl mt-3 flex items-center gap-2 ${ todo.completed ? "bg-gray-300":"" }`}>
        <input type="checkbox"
        className="ml-3" 
        onChange={ togglCompleted }/>

        <input 
        type="text"
        className={`focus:outline-none border rounded-xl h-[40px] w-full px-2 bg-transparent ${ isTodoEditable?"border-black":"border-transparent" }`}
        readOnly = { !isTodoEditable }
        value={ todoMsg }
        onChange={ (e)=>setTodoMsg(e.target.value) } />

        <button
        className="bg-blue-500 text-white rounded-xl p-2"
        onClick={()=>{
          if ( todo.completed ) return
          if (isTodoEditable) {
            editTodo()
          }else{
            setIsTodoEditable((prev)=>!prev)
          }
        }}
        disabled = { todo.completed }>
          {
            isTodoEditable ? "Save" : "Edit"
          }
          
        </button>

        <button 
        className="bg-red-500 text-white rounded-xl p-2 mr-2"
        onClick={()=>{
          deleteTodo(todo.id)
        }}>
          Delete
        </button>
      </div>
    </>
  )
}

export default TodoItem