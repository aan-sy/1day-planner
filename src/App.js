import './App.css';
import { useState } from 'react';
import { TodosProvider } from './context/todosContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoController from './components/TodoController';
import TodoNav from './components/TodoNav';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'todo', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <section>
        <Header />
        <TodosProvider>
          <TodoNav filters={filters} onChangeFilter={setFilter} />
          <TodoList filter={filter} />
          <TodoController />
        </TodosProvider>
      </section>
    </DarkModeProvider>
  );
}

export default App;
