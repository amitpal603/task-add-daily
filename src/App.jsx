import React, { useContext } from 'react'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'
import { Todos } from './context/Context'

function App() {
  const {isMode} = useContext(Todos)
  return (
    <>
      <div className={`flex flex-col h-screen gap-3 px-4 lg:flex-row lg:items-start lg:justify-center ${isMode ? 'bg-gray-600 ' : 'bg-white '}`}>
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