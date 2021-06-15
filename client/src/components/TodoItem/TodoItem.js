import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import "./TodoItem.css";

function TodoItem(props) {
  const { todo, onDeleteTodo } = props;
  const [onEditMode, setOnEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");

  const onEditTodo = (todoId) => {
    setUpdatedTodo(todo.name);
    setOnEditMode(true);
  };

  const onTodoChange = (e) => {
    const { target: { value } = {} } = e;
    setUpdatedTodo(value);
  };

  const onUpdateTodo = (todoId) => {
    props.onUpdateTodo(todoId, updatedTodo);
    setOnEditMode(false);
    setUpdatedTodo("");
  };

  const onCancelUpdateTodo = () => {
    setOnEditMode(false);
    setUpdatedTodo("");
  };

  if (onEditMode) {
    return (
      <li className="TodoItem">
        <EditTodoForm
          todo={todo}
          updatedTodo={updatedTodo}
          onTodoChange={onTodoChange}
          onUpdateTodo={onUpdateTodo}
          onCancelUpdateTodo={onCancelUpdateTodo}
        />
      </li>
    );
  }
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
        className="edit-todo-btn"
        onClick={() => onEditTodo(todo.id)}
      >
        Edit
      </button>
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
