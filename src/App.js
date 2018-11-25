import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter,Link } from 'react-router-dom'
import { Router, Route } from 'react-router';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SingIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/sing-in" component={ SingIn }></Route>
            <Route path="/sing-up" component={ SignUp }></Route>
            <Route path="/create-project" component={ CreateProject }></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
