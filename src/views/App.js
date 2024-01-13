import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Home from "./Example/Home";
import NavComponent from './Nav/NavComponent';
import ListTodo from './Todos/ListTodo';
import DetailUser from "./User/DetailUser";
import ListUser from "./User/ListUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <NavComponent />
          <Switch>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
