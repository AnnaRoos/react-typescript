import React, { useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          //Can also be done using bind(null, item.id)
          onDeleteTodo={() => todosCtx.deleteTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
