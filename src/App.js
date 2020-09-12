import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <h1>CHECK ME OUT FOOL</h1>
          </Route>
          <Route path='/login'><h1>LOGIN PAGE</h1></Route>
          <Route path='/inventory'>
            <Header />
            <h1>INVENTORY PAGE</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
