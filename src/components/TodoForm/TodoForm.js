import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { setLocalStorage } from "../../lib/localStorage";
import "./TodoForm.css";

const TodoForm = ({ todos, setTodos, storageKey }) => {
  const [todoName, setTodoName] = useState("");

  function handleTaskInputChange(e) {
    setTodoName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const object = {
      id: uuid(),
      task: todoName,
      completed: false,
    };

    const currentTodos = [...todos, object];
    setTodos(currentTodos);

    setLocalStorage({ value: currentTodos });

    setTodoName("");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          placeholder="What needs to be done?"
          value={todoName}
          onChange={handleTaskInputChange}
          //   onKeyUp={(e) => {
          //     if (e.key === "Enter") handleSubmit();
          //   }}
        />
      </form>
    </div>
  );
};

export default TodoForm;
