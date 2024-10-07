import React from 'react'

const Modal = ({children, openModal, setOpenModal}) => {
  return (
    <div onClick={(e) => e.target.id == "wrapper" ? setOpenModal(false) : setOpenModal(true)} id='wrapper' className={`fixed ${openModal ? "scale-100" : "scale-0"} inset-0 duration-300 backdrop-blur bg-[#00000049]`}>
      <div className='w-[500px] absolute right-0 left-0 mx-auto bg-white p-5 rounded-md mt-5'>
        {children}
      </div>
    </div>
  )
}

export default Modal
