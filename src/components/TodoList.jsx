import React, { useContext, useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';
import { Todos } from '../context/Context';
import DeleteTodo from './DeleteTodo';

function TodoList() {
  const { getData, activeTask, completeTask, toggleTodo,deleteTodo } = useContext(Todos);
  const [filter, setFilter] = useState('all');
  const [isOpen,setIsOpen] = useState(false)
  const [select,setSelect] = useState(null)

  const filteredTodoData =
    filter === 'all'
      ? getData
      : filter === 'active'
      ? activeTask
      : completeTask;
 
 const sendDeleteData = (todo) => {
  setSelect(todo)
  setIsOpen(true)
 }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col h-[90vh]">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            My Tasks
          </h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-purple-600">{getData.length}</div>
            <div className="text-gray-500 text-sm mt-1">Total Tasks</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-blue-600">{activeTask.length}</div>
            <div className="text-gray-500 text-sm mt-1">Active</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-green-600">{completeTask.length}</div>
            <div className="text-gray-500 text-sm mt-1">Completed</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 bg-white rounded-xl p-3 shadow-md justify-center">
          {['all', 'active', 'complete'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex-1 min-w-[100px] py-2 px-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200
                ${
                  filter === type
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50'
                }`}
            >
              {type === 'all' ? 'All' : type === 'active' ? 'Active' : 'Completed'}
            </button>
          ))}
        </div>

        {/* Task List (Scrollable) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
          {filteredTodoData && filteredTodoData.length > 0 ? (
            filteredTodoData.map((todo) => (
              <div
                key={todo._id}
                className="flex items-start justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex gap-5 items-center">
                  <button
                    onClick={() => toggleTodo(todo._id)}
                    className={`h-5 w-5 border-2 flex justify-center items-center p-2 text-green-600 rounded-full transition
                      ${
                        todo.complete
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-purple-500'
                      }`}
                  >
                    {todo.complete && <Check className="w-5 h-5 text-white" />}
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

                <div className="flex items-center gap-3 ml-4">
                  <button onClick={() => sendDeleteData(todo)} className=" hover:cursor-pointer p-2 text-red-500 hover:bg-red-100 rounded-full transition">
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

        {/* Add Button */}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-90">
          <Plus className="w-8 h-8" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
      <DeleteTodo
      open={isOpen}
      setOpen={setIsOpen}
      select={select}
      del={deleteTodo}
      />
    </div>
  );
}

export default TodoList;
