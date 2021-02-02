import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/app.css';
import Todo from './components/Todo/Todo';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getData();
    }, [getData])

    const getData = () => {
        axios.get("/api/todos")
            .then((res) => setTodos(res.data))
            .catch((err) => setError(err));
    }

    const deleteTodo=(id)=>{
        axios.delete(`/api/delete-todo/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        setTodos(todos=>todos.filter(todo=>todo.id!==id));
    }

    const changeStatus=(id)=>{
        axios.put(`/api/change-status/${id}`)
        .then()
        .catch(err=>console.log(err))
    }

    if (error) return <h1>Failed to get data from server</h1>;
    else {
        return (

            <div className="app container">
                <h1 className="text-center">Todo list</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => 
                        <Todo 
                            todo={todo} 
                            key={todo.id} 
                            deleteTodo={()=>deleteTodo(todo.id)}
                            changeStatus={()=>changeStatus(todo.id)} 
                            status={todo.status}
                        />
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <button className="btn btn-primary">
                                    <Link to="/add-new">Add new</Link>
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/add-new" component={AddTodo} />
    </Switch>
</BrowserRouter>,
    document.getElementById('root'));