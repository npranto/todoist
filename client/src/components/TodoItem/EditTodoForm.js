import React from "react";

function EditTodoForm({
  todo,
  updatedTodo,
  onTodoChange,
  onUpdateTodo,
  onCancelUpdateTodo,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    onUpdateTodo(todo.id, updatedTodo);
  };
  return (
    <form className="EditTodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        className="todo-edit-input"
        name={todo.id}
        id={todo.id}
        value={updatedTodo || ""}
        minLength={1}
        onChange={onTodoChange}
      />
      <button
        type="submit"
        className="update-todo-btn"
        onClick={() => onUpdateTodo(todo.id, updatedTodo)}
        disabled={updatedTodo === todo.name}
      >
        Update
      </button>
      <button
        type="button"
        className="cancel-update-todo-btn"
        onClick={() => onCancelUpdateTodo(todo.id)}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditTodoForm;
