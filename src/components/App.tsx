import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Login from './login/Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import CreateFoodBank from './createFoodBank/CreateFoodBank';
import Navigation from './navigation/Navigation';
import Signup from './signUp/SignUp';

function App() {

  useEffect(()=>{
    //{JSON.parse(localStorage.getItem('email') || '{}').includes('@') ? <Navigation /> : null}
  })

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/'> 
          <Home />
          </Route>
          <Route exact path='/login'> 
            <Login />
          </Route>
          <Route exact path='/signup'> 
            <Signup />
          </Route>
          <Route exact path='/create'> 
            <CreateFoodBank />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
