<<<<<<< HEAD

import React from 'react';

import RootLayout from "./Component/RootLayout/RootLayout";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyCourse from './Component/MyCourse/MyCourse'
import Results from './Component/Result/Result'
import PurchaseHistory from './Component/PurchaseHistory/PurchaseHistory.jsx'
import Profile from './Component/Profile/Profile.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/my-course" element={<MyCourse/>} />
        <Route path="/results" element={<Results />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/profile" element={<Profile />} />



     
      </Route>
    )
  );

  return <RouterProvider router={router} />;
=======
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './Store/Action';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="bg-blue-500 text-white p-4 rounded max-w-md mx-auto mt-10 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex items-center mb-4">
        <input
          className="border border-gray-300 text-black rounded p-2 w-full mr-2"
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc list-inside mt-4 space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center bg-white text-black p-2 rounded shadow">
            <span>{todo}</span>
            <button
              className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
              onClick={() => dispatch(removeTodo(index))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
>>>>>>> 1d98e387a887fb6faa4ce6c1c4179c5ab36e82d1
}

export default App;
