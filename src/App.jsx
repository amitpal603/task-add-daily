import React from 'react'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'

function App() {
  
  return (
    <>
      <div className="flex flex-col h-screen gap-3 px-4 lg:flex-row lg:items-start lg:justify-center">
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