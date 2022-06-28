import React from "react";
import { setLocalStorage } from "../../lib/localStorage";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos, toggleComplete }) => {
  function toggleComplete(id) {
    const newValues = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newValues);
    setLocalStorage({ value: newValues });
  }

  function removeTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    setLocalStorage({ value: filteredTodos });
  }
  return (
    <>
      {todos.map((todo) => {
        if (!todo.completed)
          return (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          );
      })}

      {todos.map((todo) => {
        if (todo.completed)
          return (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          );
      })}
    </>
  );
};

export default TodoList;
