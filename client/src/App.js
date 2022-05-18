import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login';
import Manager from './components/pages/Manager';
import ProjectDetails from './components/pages/ProjectDetails'
import User from './components/pages/User';
import Projects from './components/pages/Projects'

function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/צור קשר' exact component={ContactUs}/>
        <Route path='/התחברות' exact component={Login}/>
        <Route path='/manager' exact component={Manager}/>
        <Route path='/עדכוןפרטים/:username' exact component={ProjectDetails}/>
        <Route path='/כניסת משתמש/:username' exact component={User}/>
        <Route path='/פרויקטים' exact component={Projects}/>
      </Switch>
      </Router> 
    </>
  );
}

export default App;
