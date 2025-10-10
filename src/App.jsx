import React from 'react'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom'



function App() {
  
  return (
    <>
    <div className="flex flex-col h-screen items-center gap-5 px-4 mt-9 lg:flex-row lg:items-start lg:justify-center">
    <div className="w-full max-w-md">
       <InputTodo/>
    </div>
  
  <div className="w-full max-w-3xl">
    <TodoList/>
  </div>
</div>

</>
  )
}

export default App
