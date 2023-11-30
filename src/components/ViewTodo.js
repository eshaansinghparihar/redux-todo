import React from 'react';
import { useDispatch, useSelector } from'react-redux';
import { toggleTodoCompleted, deleteTodo } from '../features/todoSlice';
import {TrashIcon} from '@heroicons/react/24/outline'

function ViewTodo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleCompleted= (id)=>{
        dispatch(toggleTodoCompleted(id))
    }
    const handleDeleteTodo=(id)=>{
        dispatch(deleteTodo(id))
    }
  return (
    <div className='w-full grid grid-cols-4 grid-rows-auto-fill gap-y-2 grid-cols-gap-x-4' >
        {todos.map(todo => (
            <div
            className='h-32'
            key={todo.id}
            onClick={()=>toggleCompleted(todo.id)}
            >
                {!todo.completed ?
                <span className='text-2xl m-2 text-blue-900'>{todo.task}</span>
                :
                <span className='text-2xl m-2 text-blue-900'>
                    <s><i>{todo.task}</i></s>
                </span>
                }
                <button onClick={()=>handleDeleteTodo(todo.id)}>
                <TrashIcon className='h-4 w-4 text-red-600'/>
                </button>

            </div>
        ))}
    </div>
  )
}

export default ViewTodo