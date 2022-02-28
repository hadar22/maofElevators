import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login';

function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/צור קשר' exact component={ContactUs}/>
        <Route path='/התחברות' exact component={Login}/>
      </Switch>
      </Router> 
    </>
  );
}

export default App;
