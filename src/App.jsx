import { useState, useEffect } from 'react'
import { ToDoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
// import './App.css'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prev) => (prev.id === id ? todo:prev)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id))
  }

  const statusUpdate = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]")
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
    <ToDoProvider value = {{todos, addTodo, updateTodo, deleteTodo, statusUpdate}}>
      <div className='flex flex-col justify-center items-center w-screen h-screen  ml-1'>
        <h2 className='mb-1 text-2xl bold'>Manage  Your Todos </h2>
          <div>
            <TodoForm/>
          </div>
          <div className='mt-2 text-xl bg-purple-400 w-xl rounded-2xl' >
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'>
                  <TodoItem todo={todo} />
                </div>
            ))}
            
          </div>
      </div>
      
    </ToDoProvider>
  )
}

export default App
