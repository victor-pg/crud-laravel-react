import React,{useState} from 'react';
import {Link,Redirect,browserHistory} from 'react-router-dom';
import axios from 'axios';

const AddTodo=({history})=>{
    const [title,setTitle] = useState('');

    const getTitle=(e)=>{
        setTitle(e.target.value);
    }

    const addNewTodo=(e)=>{
        e.preventDefault();

        axios.post("/api/add-todo",{
            title:title,
            status:0
        })
        .then((res)=>history.push("/"))
        .catch((err)=>alert(err))
    }

    return(
        <div className="container">
            <button className="btn btn-danger"><Link to="/">Back</Link></button>
            <form onSubmit={addNewTodo}>
                <input className="form-control" placeholder="title" onChange={getTitle} value={title}/>
                <input className="form-control btn btn-success" type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddTodo;