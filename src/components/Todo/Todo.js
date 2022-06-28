import React from 'react';
import './Todo.css';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <>
            <div className="todo__container">
                <input checked={todo.completed} onClick={handleCheckboxClick} type="checkbox"/>
                <li className="todo__description">{todo.task}</li>
                <button onClick={handleRemoveClick} className="todo__delete">X</button>
            </div>
        </>
    );
};

export default Todo;