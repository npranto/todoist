import React from "react";
import "./AddTodoForm.css";

function AddTodoForm({ onAddTodo, todoInput, onTodoInputChange }) {
  return (
    <form className="AddTodoForm" onSubmit={onAddTodo}>
      <label htmlFor="todoInput">
        <input
          type="text"
          name="todoInput"
          className="todo-input"
          minLength="1"
          maxLength="150"
          value={todoInput}
          onChange={onTodoInputChange}
          required
        />
      </label>
      <button type="submit" className="add-todo-btn">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
