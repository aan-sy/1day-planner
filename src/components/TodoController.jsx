import React, { useContext, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from '../context/todosContext';

export default function Controller() {
  const { addTodo } = useContext(TodosContext);
  const [text, setText] = useState('');
  const handleChange = (e) => {setText(e.target.value)}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() === '') return;
    addTodo({
      id: uuidv4(),
      text,
      status: 'todo'
    });
    setText('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='해야 할 일' onChange={handleChange} value={text} />
        <button><BiPlus /></button>
      </form>
    </section>
  );
}

