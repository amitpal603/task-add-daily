import React, { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'

export const Todos = createContext()
 export function Context({children}) {
   const [postTodo,setPostTodo] = useState()
   const {register,handleSubmit,reset} = useForm()

const HandleTodo = (inputData) => {

}
    const store = {
        HandleTodo,register,handleSubmit
    }
  return <Todos.Provider value={store}>{children}</Todos.Provider>
}

export default Context
