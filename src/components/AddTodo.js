import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

export default function AddTodo(){
  const [todo,setTodo] = useState('')
  const dispatch = useDispatch()

  const handleTodo = (e) => {
    setTodo(e.target.value)
  }

  const handleAddTodo = () => {
    if(todo)
    dispatch(addTodo(todo))
    setTodo('')
  }
  return (
    <div className='flex gap-5 items-center	justify-items-center'>
        <input placeholder='Enter todo here' 
        className='m-4 w-4/5 p-4 text-2xl'
        value={todo}
        onChange={handleTodo}/>
        <button onClick={handleAddTodo}>
        <PlusCircleIcon className='h-9 w-9 text-blue-600'/>
        </button>
    </div>
  )
}
