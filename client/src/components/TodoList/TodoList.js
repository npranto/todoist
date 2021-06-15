import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
