import React, { createContext, useState } from 'react';
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
import Login from './pages/Login/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext([])
export const EventNameContext = createContext([])

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [eventName, setEventName] = useState('')

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <EventNameContext.Provider value={[eventName, setEventName]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/admin">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/createEvent">
              <AddEvent />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </EventNameContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
