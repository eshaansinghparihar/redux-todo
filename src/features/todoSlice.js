import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const todoSlice = createSlice({
    initialState,
    name: "todos",
    reducers: {
        addTodo: (state, action) => {
            const todo ={
                id : nanoid(),
                task : action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        toggleTodoCompleted: (state, action)=>{
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed =!todo.completed
                }
                return todo
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        }
    }
})

export const { addTodo, toggleTodoCompleted, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
