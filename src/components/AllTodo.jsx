import React, { useContext } from 'react'
import { Todos } from '../context/Context'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Check, Trash2, Plus } from 'lucide-react';
function AllTodo({sendDelete,isMode}) {
    const {toggleTodo,getData,searchTask} = useContext(Todos)
  return (
    <div>
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
          { getData && getData.length > 0 ? (
           searchTask.map((todo) => (
              <div
                key={todo._id}
                className="flex items-start justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex gap-5 items-center">
                  <button
                    onClick={() => toggleTodo(todo._id,todo.complete)}
                    className={`h-5 w-5 border-2 flex justify-center items-center p-2 text-green-600 rounded-full transition
                      ${
                        todo.complete
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-purple-500'
                      }`}
                  >
                    {todo.complete && <IoMdCheckmarkCircleOutline className='h-5 w-5 text-green-500'/>}
                  </button>

                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        todo.complete
                          ? 'line-through text-gray-500'
                          : 'text-gray-800'
                      }`}
                    >
                      {todo.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        todo.complete
                          ? 'line-through text-gray-400'
                          : 'text-gray-500'
                      }`}
                    >
                      {todo.description || 'No description provided'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 ml-4 flex-col">
                  <button onClick={() => sendDelete(todo)} className=" hover:cursor-pointer p-2 text-red-500 hover:bg-red-100 rounded-full transition">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 animate-bounce">📝</div>
              <p className="text-gray-500 text-lg">No tasks found</p>
              <p className="text-gray-400 text-sm mt-2">
                Click the + button to add your first task
              </p>
            </div>
          )}
        </div>
    </div>
  )
}

export default AllTodo
