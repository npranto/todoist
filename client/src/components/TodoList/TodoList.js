import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({ todos, onDeleteTodo, onUpdateTodo, updateTodoInput }) {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
          updateTodoInput={updateTodoInput}
        />
      ))}
    </ul>
  );
}

export default TodoList;
