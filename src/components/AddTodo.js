import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

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
    <div className='m-12'>
        <input placeholder='Enter todo here' 
        className='m-4 w-4/5 p-4 text-2xl'
        value={todo}
        onChange={handleTodo}/>
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}
