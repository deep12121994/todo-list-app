import React from 'react';
import './App.css';

const ListTodo = (props) => {
    const todos = props.todo;
    const listTodos = todos.map(item => {
        return <div className="todo-list" key={item.key}>
            <p>{item.text}
                <span>
                    <button id="delete-btn" onClick={() => props.deleteTodo(item.key)}>Delete</button>
                </span>
            </p>

        </div>
    })
    return(
        <div>
            {listTodos}
        </div>
    )
}


export default ListTodo;