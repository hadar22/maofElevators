import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login';
import Manager from './components/pages/Manager';
import ProjectDetails from './components/pages/ProjectDetails'
import User from './components/pages/User';
import Projects from './components/pages/Projects'
import AboutUs from './components/pages/AboutUs'
import Services from './components/pages/Services'
import ServiceTracking from './components/pages/ServiceTracking'
import Process from './components/pages/Process'
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
        <Route path='/אודות' exact component={AboutUs}/>
        <Route path='/שירותים' exact component={Services}/>
        <Route path='/מעקב שירות' exact component={ServiceTracking}/>
        <Route path='/התהליך' exact component={Process}/>
      </Switch>
      <Footer/>
      </Router> 
    </>
  );
}

export default App;
