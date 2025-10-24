import React, { useContext } from 'react';
import { Todos } from '../context/Context';

function InputTodo() {
  const { register, handleSubmit, createTodo, getData } = useContext(Todos);

  console.log(getData);

  // ✅ Pass form data directly to createTodo()
  const onSubmit = (data) => {
    createTodo(data);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Add New Todo</h2>
            <p className="text-gray-500 text-sm">Create a new task to stay organized</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                {...register('title')}
                id="title"
                type="text"
                placeholder="Enter your task title"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 text-gray-800 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                {...register('description')}
                placeholder="Add more details"
                rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 text-gray-800 placeholder-gray-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition duration-200 hover:scale-105 shadow-lg"
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputTodo;
