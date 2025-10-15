import React, { useContext, useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Todos } from '../context/Context';
import DeleteTodo from './DeleteTodo';
import { NavLink, Routes, Route } from 'react-router-dom';
import AllTodo from './AllTodo';
import ActiveTodo from './ActiveTodo';
import CompleteTodo from './CompleteTodo';

function TodoList() {
  const { getData, activeTask, completeTask, deleteTodo, setSearch } = useContext(Todos);
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(null);

  const sendDeleteData = (todo) => {
    setSelect(todo);
    setIsOpen(true);
  };

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
            <div className="text-gray-500 text-sm mt-1 font-bold">Total Tasks</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-blue-600">{activeTask.length}</div>
            <div className="text-gray-500 text-sm mt-1 font-bold">Active</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-green-600">{completeTask.length}</div>
            <div className="text-gray-500 text-sm mt-1 font-bold">Completed</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 shadow-md justify-center mb-3">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Your Task"
            className="bg-white outline-none w-full pl-3"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-15 mb-8 bg-white rounded-xl p-3 shadow-md justify-center">
          {[{ to: '/', label: 'All' }, { to: '/active', label: 'Active' }, { to: '/complete', label: 'Complete' }].map(
            (link, index) => (
              <button key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex-1 min-w-[100px] py-2 px-13  rounded-lg font-semibold text-sm sm:text-base transition-all duration-200
             ${
               isActive
                 ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                 : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50'
             }`
                  }
                >
                  {link.label}
                </NavLink>
              </button>
            )
          )}
        </div>

        {/* Task List */}
        <Routes>
          <Route path="/" element={<AllTodo sendDelete={sendDeleteData}/>} />
          <Route path="/active" element={<ActiveTodo sendDelete={sendDeleteData}/>} />
          <Route path="/complete" element={<CompleteTodo sendDelete={sendDeleteData}/>} />
        </Routes>

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

      <DeleteTodo open={isOpen} setOpen={setIsOpen} select={select} del={deleteTodo} />
    </div>
  );
}

export default TodoList;
