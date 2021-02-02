import React from 'react';
import { useState } from 'react';
import './Todo.scss';
const Todo = ({ todo, status, deleteTodo, changeStatus }) => {
    const [marked, setMarked] = useState(status);

    const statusFunctions = () => {
        setMarked(!marked);
        changeStatus();
    }

    return (
        <tr>
            <td>{todo.id}</td>
            <td className={marked ? "marked" : ""}>{todo.title}</td>
            <td>
                <button className="btn btn-success" onClick={statusFunctions}>
                    Change status
                </button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deleteTodo}>Remove</button>
            </td>
        </tr>
    );
}

export default Todo;