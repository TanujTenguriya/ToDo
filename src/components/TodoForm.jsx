import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
function TodoForm() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({todo, completed:false})
        setTodo('')
    }

  return (
    <div className='flex'>
        <input 
            type="text"
            placeholder='Write todo..'
            value={todo}
            onChange = {(e) => setTodo(e.target.value)}
            className='bg-[#a893d8] w-xl  rounded-2xl mr-2 text-black'
        />
        <button onClick = {add} className='text-red-500 ' >Add</button>
    </div>
  )
}

export default TodoForm
