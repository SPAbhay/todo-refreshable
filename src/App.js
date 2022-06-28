import "./App.css";
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { getLocalStorage } from "./lib/localStorage";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = getLocalStorage();
    if (storageTodos) {
      setTodos(JSON.parse(storageTodos));
    }
  }, []);

  return (
    <div className="todo">
      <h1 className="todo__heading">todo refresher</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      {todos.length === 0 && <p className="no__todos">No todos to display</p>}
    </div>
  );
};

export default App;
