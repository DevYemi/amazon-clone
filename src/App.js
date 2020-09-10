import React from 'react';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path='/home'>
          <h1>HOME PAGE</h1>
          </Route>
        <Route path='/checkout'><h1>CHECK ME OUT FOOL</h1></Route>
        <Route path='/login'><h1>LOGIN PAGE</h1></Route>
        <Route path='/inventory'><h1>INVENTORY PAGE</h1></Route>
        <Route path='/'><h1>HOME PAGE !!!!!</h1></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
