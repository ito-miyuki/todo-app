import React from 'react'
import checked from '../assets/tick.png'
import not_checked from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => {toggle(id)}}className='flex flex-1 items-center cursor-pointer '>
        <img src={isComplete? checked : not_checked} alt="not_checked-icon" className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decolation-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="delete-icon" className='w-4 cursor-pointer'/>
    </div>
  )
}

export default TodoItems
