import React from 'react';
import Todo from "../Todo/Todo";


const TodoList = ({todos, removeTodo, toggleComplete}) => {
    return (
        <>
            {todos.map(todo => {
                if (!todo.completed)
                return (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
                )
            })}

            {todos.map(todo => {
                if (todo.completed)
                    return (
                        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
                    )
            })}

        </>
    );
};

export default TodoList;