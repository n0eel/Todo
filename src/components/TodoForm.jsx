import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'

const TodoForm = () => {
  const {todos, setTodos} = useContext(Context)

    function handleSubmitForm(e) {
        e.preventDefault()
        const data = {
            id:todos.length + 1,
            value:e.target.todoValue.value
        }
        localStorage.setItem("todos", JSON.stringify(todos))
        setTodos([...todos, data])
        e.target.reset()
    }
    console.log(todos)

  return (
    <form onSubmit={handleSubmitForm} className='w-[600px] p-5 rounded-md bg-slate-400 mx-auto mt-5' autoComplete='off'>
        <input required className='p-2 rounded-tl-md rounded-bl-md w-[80%] outline-none' type="text" placeholder='Enter your todo' name='todoValue' />
        <button type='submit' className='duration-300 p-2 rounded-tr-md rounded-br-md bg-green-600 outline-none hover:opacity-75 text-white w-[20%]'>Add</button>
    </form>
  )
}

export default TodoForm



