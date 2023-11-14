import React, { useContext } from 'react';
import { TodosContext } from '../context/todosContext';
import Todo from './Todo';

export default function TodoList({ filter }) {
  const { todos } = useContext(TodosContext);
  const total = todos.length;
  const numOfTodo = todos.reduce((accum, todo) => todo.status === 'todo' ? accum + 1 : accum, 0);
  const filterdTodos = filterTodo(todos, filter);  

  return (
    <section>
      <p>todo: <span>{numOfTodo}</span> completed: <span>{total - numOfTodo}</span></p>
      <ul>
        {filterdTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </section>
  );
}

const filterTodo = (todos, filter) => {
  return filter === 'all' ? todos : todos.filter(todo => todo.status === filter);
}

