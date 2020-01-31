import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuid from "uuid";

import "./App.css";

const LOCAL_STORAGEKEY = "TODO.KEY";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGEKEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGEKEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodos(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setTodos(pre => {
      return [...pre, { id: uuid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodos={toggleTodos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left Todo</div>
    </>
  );
}

export default App;
