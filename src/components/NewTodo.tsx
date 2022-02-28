import React, { useRef } from 'react';

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
