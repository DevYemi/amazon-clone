import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {useStateValue} from './components/StateProvider'
import {auth} from './components/firebase'

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() =>{
   const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
      dispatch({
        type: "SET_USER",
        user: authUser
      })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => unsubcribe();
  }, [])
  console.log(user)
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/home'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/login'>
          <Login />
          </Route>
          <Route path='/inventory'>
            <Header />
            <h1>INVENTORY PAGE</h1>
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
