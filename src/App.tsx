import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todo from './models/todo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => prev.concat(newTodo));
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
