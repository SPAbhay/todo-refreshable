import './App.css';
import React, {useEffect, useState} from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    console.log(todos);
    // useEffect(() => {
    //     // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    // }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        console.log(todos);
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                }
            ));
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }


    return (
        <>
            <div className="todo">
                <h1 className="todo__heading">
                    todo refresher
                </h1>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
            </div>
        </>
    );
}

export default App;
