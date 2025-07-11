import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
function TodoForm() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        addTodo({todo, completed:false})
        setTodo('')
    }

  return (
    <form onSubmit = {add} className='flex'>
        <input 
            type="text"
            placeholder='Write todo..'
            value={todo}
            onChange = {(e) => setTodo(e.target.value)}
            className='bg-purple-400 w-xl border-purple-800 mr-1 rounded-2xl'
        />
        <button type = 'submit' className='bg-gray-500' >Add</button>
    </form>
  )
}

export default TodoForm
