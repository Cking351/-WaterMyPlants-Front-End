import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Water My Plants</h1>
      </header>
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <PrivateRoute path="/plants" component={PlantsPage} /> */}
          <Route path="/" />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
