import React from "react";
import Todo from "./Todo";
import uuid from "uuid";

export default function TodoList({ todos, toggleTodos }) {
  return todos.map(todox => {
    return <Todo key={uuid()} todo={todox} toggleTodos={toggleTodos} />;
  });
}
