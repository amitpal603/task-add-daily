import React, { useContext, useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Todos } from '../context/Context';
import DeleteTodo from './DeleteTodo';
import { NavLink, Routes, Route } from 'react-router-dom';
import AllTodo from './AllTodo';
import ActiveTodo from './ActiveTodo';
import CompleteTodo from './CompleteTodo';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

function TodoList() {
  const { getData, activeTask, completeTask, deleteTodo, setSearch,Toggle,isMode } = useContext(Todos);
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(null);
 console.log(isMode)
  const sendDeleteData = (todo) => {
    setSelect(todo);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-10 px-3 sm:px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[90vh]">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1 sm:mb-2">
            My Tasks
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">Stay organized and productive</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className={` rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md text-center hover:shadow-lg transition-all ${isMode ? 'bg-gray-400 hover:shadow-lg hover:shadow-purple-300 transition-all' : 'bg-white'}`}>
            <div className={` ${isMode ? 'text-purple-600' : ''} text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 `}>{getData.length}</div>
            <div className={`text-gray-500 text-xs sm:text-sm mt-1 font-bold ${isMode ? 'text-white' : ''}`}>Total</div>
          </div>
          <div className={` rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md text-center hover:shadow-lg transition-all ${isMode ? 'bg-gray-400 hover:shadow-lg hover:shadow-blue-300 transition-all' : 'bg-white'}`}>
            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 ${isMode ? 'text-blue-600 ' : ''}`}>{activeTask.length}</div>
            <div className={` text-xs sm:text-sm mt-1 font-bold ${isMode ? 'text-white' : ''}`} >Active</div>
          </div>
          <div className={` rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md text-center hover:shadow-lg transition-all ${isMode ? 'bg-gray-400 hover:shadow-lg hover:shadow-green-300 transition-all' : 'bg-white'}`}>
            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 ${isMode ? 'text-green-600 ' : ''}`}>{completeTask.length}</div>
            <div className={` text-xs sm:text-sm mt-1 font-bold ${isMode ? 'text-white' : ''}`}>Done</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-md mb-3 sm:mb-4 md:mb-3">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Your Task"
            className="bg-white outline-none w-full pl-2 sm:pl-3 text-sm sm:text-base"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 mb-4 sm:mb-6 md:mb-8 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-md justify-center">
          {[{ to: '/', label: 'All' }, { to: '/active', label: 'Active' }, { to: '/complete', label: 'Complete' }].map(
            (link, index) => (
              <button key={index} className="flex-1 sm:flex-none">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block w-full sm:min-w-[100px] py-2 px-4 sm:px-6 md:px-8 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-200
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
        <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 -mr-1 sm:-mr-2">
          <Routes>
            <Route path="/" element={<AllTodo sendDelete={sendDeleteData} isMode={isMode}/>} />
            <Route path="/active" element={<ActiveTodo sendDelete={sendDeleteData} isMode={isMode}/>} />
            <Route path="/complete" element={<CompleteTodo sendDelete={sendDeleteData} isMode={isMode}/>} />
          </Routes>
        </div>

        {/*dark and light mode implement */}
        <button onClick={Toggle} className=" flex  sm:flex fixed bottom-6 md:bottom-8 right-6 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-90">
          {isMode ? <CiLight className='text-3xl'/> : <CiDark className='text-3xl'/>}
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
        
        /* Custom scrollbar for webkit browsers */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>

      <DeleteTodo open={isOpen} setOpen={setIsOpen} select={select} del={deleteTodo} />
    </div>
  );
}

export default TodoList;