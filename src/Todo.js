import React from "react";

export default function Todo({ todo, toggleTodos }) {
  function handleTodoClick() {
    toggleTodos(todo.id);
  }

  return (
    <>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      ></input>
      <label> {todo.name}</label>
      <br></br>
    </>
  );
}
