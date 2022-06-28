import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import './TodoForm.css';

const TodoForm = ({addTodo}) => {
    const [todoName, setTodoName] = useState("");
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodoName(e.target.value);
        setTodo({...todo, task: todoName});

        console.log(todo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {


            setTodo({...todo, task: "1234"});
            addTodo({...todo, id: uuid()})
        }
        setTodoName("");
    }


    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input className="form__input" name="task" type="text" placeholder="What needs to be done?" value={todoName} onChange={handleTaskInputChange}/>
                </form>
            </div>
        </>
    );
};

export default TodoForm;