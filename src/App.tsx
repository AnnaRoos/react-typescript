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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
