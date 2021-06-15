import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, onDeleteTodo }) {
  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        className="todo-checkbox"
        name={todo.id}
        id={todo.id}
      />
      <label htmlFor={todo.id}>{todo.name}</label>
      <button
        type="button"
        className="delete-todo-btn"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
