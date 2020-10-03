import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Admin/Dashboard';
import AddEvent from './pages/Admin/AddEvent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/admin">
          <Dashboard/>
        </Route>
        <Route path="/createEvent">
          <AddEvent/>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
