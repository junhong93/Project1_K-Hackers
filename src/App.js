import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>

          <Route path="/register">
            <h1>Register</h1>
          </Route>

          <Route path="/item4">
            <h1>Item 4</h1>
          </Route>

          <Route path="/item3">
            <h1>Item 3</h1>
          </Route>

          <Route path="/item2">
            <h1>Item 2</h1>
          </Route>

          <Route path="/list">
            <h1>List</h1>
          </Route>

          <Route path="/">
            <Header />
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
