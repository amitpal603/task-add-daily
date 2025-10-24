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
    <div className=" flex  justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100">
          <div className="mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Add New Todo</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Create a new task to stay organized</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="title" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Title
              </label>
              <input
                {...register('title')}
                id="title"
                type="text"
                placeholder="Enter your task title"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Description
              </label>
              <textarea
                id="description"
                {...register('description')}
                placeholder="Add more details"
                rows="3"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 text-gray-800 placeholder-gray-400 resize-none text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition duration-200 active:scale-95 sm:hover:scale-105 shadow-lg text-sm sm:text-base"
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