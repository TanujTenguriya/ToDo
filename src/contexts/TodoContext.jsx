import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: 1,
        text: "Hello",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    statusUpdate: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const ToDoProvider = TodoContext.Provider