import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./app";
import AddTodo from './components/AddTodo/AddTodo';
const RootRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/add-new" component={AddTodo} />
            </Switch>
            da
            da
            d
            ad
            a
            da
            d
            a
        </div>
    );
}

export default RootRouter;

ReactDOM.render(<BrowserRouter>
    <RootRouter />
</BrowserRouter>,
    document.getElementById('root'));