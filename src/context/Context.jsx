import React, { createContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const Todos = createContext();

export function Context({ children }) {
  const [getData, setGetData] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [search,setSearch] = useState(" ")
  // ✅ Fetch all todos
  const getTodo = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/task/get');
      const data = await res.json();
      setGetData(data.todo || []); // fallback for safety
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  };

  // ✅ Create new todo (takes form data directly)
  const createTodo = async (inputData) => {
    try {
      const res = await fetch('http://localhost:3000/api/task/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData) // ✅ Send directly
      });

      if (!res.ok) {
        console.error('Error creating todo:', res.status, res.statusText);
        return;
      }

      await getTodo(); // refresh list
      reset(); // clear form
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const deleteTodo = async(id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/task/delete/${id}`,{
        method: 'DELETE'
      })
       if (!res.ok) {
        console.error('Error deleting todo:', res.status, res.statusText);
        return;
      }
     await getTodo()
    } catch (error) {
       console.error('Error deleting todo:', error);
    }
  }
  // update todo
  const toggleTodo = async(id,currentState) => {
   try {
    const res = await fetch(`http://localhost:3000/api/task/update/${id}`,{
    method: 'PUT',
    headers:{
       'Content-Type': 'application/json',
    },
    body: JSON.stringify({complete : !currentState})
   })

   if (!res.ok) {
        console.error('Error creating todo:', res.status, res.statusText);
        return;
      }

      await getTodo()
   } catch (error) {
     console.error('Error update todo:', error);
   }
  }

  const activeTask = getData.filter((todo) => !todo.complete)
  const completeTask = getData.filter((todo) => todo.complete)
  useEffect(() => {
    getTodo();
  }, []);
const searchTask = getData.filter((todo) => {
  const searchTerm = search.toLowerCase()

  if(searchTerm === " ") return true

  return (
    todo.title.toLowerCase().includes(searchTerm) ||
    todo.description.toLowerCase().includes(searchTerm)
  )
})
  const store = {
    handleSubmit,
    createTodo,
    register,
    getData,
    activeTask,
    completeTask,
    toggleTodo,
    deleteTodo,
    setSearch,
    searchTask
  };

  return <Todos.Provider value={store}>{children}</Todos.Provider>;
}

export default Context;
