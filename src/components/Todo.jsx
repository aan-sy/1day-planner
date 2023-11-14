import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { TodosContext } from '../context/todosContext';

export default function Todo({ todo }) {
  const { id, text, status } = todo;
  const { deleteTodo, updateTodo } = useContext(TodosContext);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'todo';
    updateTodo({...todo, status})
  }

  return (
    <li>
      <input id={id} type='checkbox' checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor={id} className={status === 'completed' && 'text-gray-500 line-through decoration-gray-700'}>{text}</label>
      <button id={id} onClick={() => {deleteTodo(todo)}}><IoClose /></button>
    </li>
  );
}

