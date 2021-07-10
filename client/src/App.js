import { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Nav from "./components/Nav/Nav";
import TodoList from "./components/TodoList/TodoList";
import getUniqueId from "./helpers/getUniqueId";
import {
  getTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from "./helpers/localStorage";
import { getUserByUserIdAwait } from "./services/firebase";

function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
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

  const onUpdateTodo = (todoId, updatedTodo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === todoId) {
          return {
            ...prevTodo,
            name: updatedTodo,
          };
        }
        return prevTodo;
      });
    });
  };

  const createTodo = (name) => {
    if (!name || !name.length) {
      throw new Error(
        "Please provide a valid name for a todo. It must be at least 1 character long"
      );
    }
    return {
      id: getUniqueId(),
      createdAt: new Date(),
      name,
      completed: true,
    };
  };

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  useEffect(() => {
    const doSomething = async () => {
      const a = await getUserByUserIdAwait("nprantoa");
      console.log(a);
    };
    doSomething();
  }, []);

  return (
    <div className="App">
      <Nav />
      <AddTodoForm
        onAddTodo={onAddTodo}
        todoInput={todoInput}
        onTodoInputChange={onTodoInputChange}
      />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
      />
    </div>
  );
}

export default App;
