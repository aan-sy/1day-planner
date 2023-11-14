import { createContext, useEffect, useState } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const addTodo = (todo) => setTodos([...todos, todo]);
  const deleteTodo = (deletedTodo) => setTodos(prev => prev.filter(todo => todo.id !== deletedTodo.id));
  const updateTodo = (updatedTodo) => setTodos(prev => prev.map(todo => todo.id !== updatedTodo.id ? todo : updatedTodo));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return <TodosContext.Provider value={{todos, addTodo, deleteTodo, updateTodo}}>
    {children}
  </TodosContext.Provider>
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}