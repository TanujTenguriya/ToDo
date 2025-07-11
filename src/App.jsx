import { useState, useEffect } from 'react'
import { ToDoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
// import './App.css'
function App() {
  const [todos, setTodos] = useState('')

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prev) => (prev.id === id ? todo:prev)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id))
  }

  const statusUpdate = (id) => {
    setTodos((prev) => prev.map((prev) => (prev.id === id ? !prev.statusUpdate : prev)))
  }

  
  return (
    <ToDoProvider value = {{todos, addTodo, updateTodo, deleteTodo, statusUpdate}}>
      <div className='flex justify-center items-center h-screen w-screen'>
          <TodoForm/>
      </div>
      
    </ToDoProvider>
  )
}

export default App
