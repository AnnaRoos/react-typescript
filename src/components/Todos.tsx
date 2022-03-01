import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          //Can also be done using bind(null, item.id)
          onDeleteTodo={() => props.onDeleteTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
