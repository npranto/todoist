import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const onTodoInputChange = (e) => {
    const { target: { value } = {} } = e;
    setTodoInput(value);
  };

  const onAddTodo = (e) => {
    e.preventDefault();
    const newTodo = createTodo(todoInput);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput("");
  };

  const onDeleteTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todoId)
    );
  };

  const createTodo = (name) => {
    if (!name || !name.length) {
      throw new Error(
        "Please provide a valid name for a todo. It must be at least 1 character long"
      );
    }
    return {
      id: uuidv4(),
      createdAt: new Date(),
      name,
      completed: true,
    };
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Todoist</h1>
      </header>

      <form className="todo-form" onSubmit={onAddTodo}>
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

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
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
        ))}
      </ul>
    </div>
  );
}

export default App;
