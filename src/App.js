import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import MoviesByDate from './components/Movies/MoviesByDate/MoviesByDate';
import Navbar from './components/Navbar/Navbar';
import Seats from './components/Seats/Seats';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path='/movies'>
            <MoviesByDate></MoviesByDate>
          </Route>
          <Route path='/seatBook/:id'>
            <Seats></Seats>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
