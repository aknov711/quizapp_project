import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import Home from './components/home';

function App() {
  return (
  
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/quiz'>
            <Home />
          </Route>
          <Route path='/'>
            <Quiz />
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;