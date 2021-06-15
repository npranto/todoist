import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Nav from "./components/Nav/Nav";
import TodoList from "./components/TodoList/TodoList";

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
      <Nav />
      <AddTodoForm
        onAddTodo={onAddTodo}
        todoInput={todoInput}
        onTodoInputChange={onTodoInputChange}
      />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}

export default App;
