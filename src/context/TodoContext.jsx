import { createContext, useState } from "react";

export const Context = createContext()

export const TodoContext = ({children}) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

    localStorage.setItem("todos", JSON.stringify(todos))

    return (
        <Context.Provider value={{todos, setTodos}}>{children}</Context.Provider>
    )
}