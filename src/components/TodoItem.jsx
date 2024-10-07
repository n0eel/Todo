import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'

const TodoItem = ({ item, index, handleUpdateClick, handleMoreBtnClick}) => {
    const {todos, setTodos} = useContext(Context)
    JSON.parse(localStorage.getItem(todos))
    function handleDeleteBtnClick(id) {
        const deleteIndex = todos.findIndex(item => item.id == id)
        todos.splice(deleteIndex, 1)
        setTodos([...todos])
    }
  return (
        <li className='flex items-center justify-between p-2 bg-white rounded-md'>
            <div className='flex items-center'>
                <span>{index + 1}.</span>
                <strong>{item.value}</strong>
            </div>
            <div className='flex space-x-2'>
                <button onClick={handleUpdateClick} id={item.id} className='p-2 font-semibold text-white bg-blue-600 rounded-md'>Update</button>
                <button onClick={() => handleDeleteBtnClick(item.id)} className='p-2 font-semibold text-white bg-red-600 rounded-md'>Delete</button>
                <button onClick={handleMoreBtnClick} id={item.id} className='p-2 font-semibold text-white bg-green-600 rounded-md'>More</button>
            </div>
        </li>
  )
}

export default TodoItem
