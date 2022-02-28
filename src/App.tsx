import React from 'react';

import Todo from './models/todo';
import Todos from './components/Todos';

function App() {
  const todos = [new Todo('Learn stuff'), new Todo('Clean')];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
