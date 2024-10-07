import React, { useContext, useState } from 'react'
import TodoItem from './TodoItem'
import Modal from './Modal'
import { Context } from '../context/TodoContext'

const TodoList = () => {
  const {todos, setTodos} = useContext(Context)
  
  const [updateModal, setUpdateModal] = useState(false)
  const [updateValue, setUpdateValue] = useState("")
  const [updateId, setUpdateId] = useState(0)

  function handleUpdateClick(e) {
    setUpdateModal(true)
    const updateData = todos.find(value => value.id == e.target.id)
    setUpdateValue(updateData.value)
    setUpdateId(e.target.id)
  }

  function handleUpdateSubmit(e) {
    e.preventDefault()
    const updateData = todos.find(value => value.id == updateId)
    updateData.value = updateValue
    setUpdateModal(false)
    setTodos([...todos])
  }
  const [moreModal, setMoreModal] = useState(false)
  const [moreData, setMoreData] = useState({})
  function handleMoreBtnClick(e) {
      const clickedId = e.target.id
      setMoreModal(true)
      const findObj = todos.find(item => item.id == clickedId)
      setMoreData(findObj)
  }

  return (
    <>
    <ul className='w-[600px] space-y-5 p-5 rounded md bg-slate-400 mx-auto mt-5'>
        {todos.map((item, index) => <TodoItem handleMoreBtnClick={handleMoreBtnClick} handleUpdateClick={handleUpdateClick} index={index} item={item} key={item.id}/>)}
    </ul>
      <Modal openModal={updateModal} setOpenModal={setUpdateModal}>
        <form onSubmit={handleUpdateSubmit} className='p-5 mx-auto mt-5 rounded-md bg-slate-400' autoComplete='off'>
            <input onChange={(e) => setUpdateValue(e.target.value)} value={updateValue} required className='p-2 rounded-tl-md rounded-bl-md w-[80%] outline-none' type="text" placeholder='Edit your todo'/>
            <button type='submit' className='duration-300 p-2 rounded-tr-md rounded-br-md bg-green-600 outline-none hover:opacity-75 text-white w-[20%]'>Edit</button>
        </form>
      </Modal>
      <Modal openModal={moreModal} setOpenModal={setMoreModal}>
          <h2 className='font-bold text-center text-[25px] '>{moreData.value}</h2>
      </Modal>
    </>

  )
}

export default TodoList
