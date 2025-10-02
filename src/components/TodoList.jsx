import React from 'react'
import { Check, Trash2, Plus } from 'lucide-react'

function TodoList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            My Tasks
          </h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md transform transition hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-purple-600">0</div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md transform transition hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md transform transition hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6 bg-white rounded-xl p-2 shadow-md">
          <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105">
            All
          </button>
          <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-gray-600 hover:bg-gray-100">
            Active
          </button>
          <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-gray-600 hover:bg-gray-100">
            Completed
          </button>
        </div>

        {/* Empty State */}
        <div className="space-y-3">
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4 animate-bounce">📝</div>
            <p className="text-gray-500 text-lg">No tasks found</p>
            <p className="text-gray-400 text-sm mt-2">Click the + button to add your first task</p>
          </div>
        </div>

        {/* Add Button */}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-90">
          <Plus className="w-8 h-8" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

export default TodoList