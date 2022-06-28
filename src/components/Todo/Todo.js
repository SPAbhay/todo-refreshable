import React from "react";
import "./Todo.css";
import {TrashIcon} from "@heroicons/react/outline";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className="todo__container">
      <input className="todo__completed"
        checked={todo.completed}
        onChange={handleCheckboxClick}
        type="checkbox"
      />
      <li className="todo__description">{todo.task}</li>
      <button onClick={handleRemoveClick} className="todo__delete">
        <TrashIcon className="todo__delete-icon"/>
      </button>
    </div>
  );
};

export default Todo;
