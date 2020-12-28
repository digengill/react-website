import React from "react";
import {Navbar,Nav} from 'react-bootstrap/';
import Projects from './Projects.js';
import {HashRouter as Router,Route, Link, Switch} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Particles from "./Particles";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
//sd
//https://www.youtube.com/watch?v=d34GsFz-HkY   Parallax Design
//https://www.youtube.com/watch?v=QfLI4BoXglA

// HOver Effects https://www.youtube.com/watch?v=XZZ9DaG4ZvE
// ** https://www.youtube.com/watch?v=ltxxNidblts
//             <Navbar.Brand><Typography variant="h6">GILL</Typography></Navbar.Brand>


export default function App() {
  
  
  return (
      <div className="page__container">
        <div className="particle__container">
        <Router>

          <Navbar className="color-nav" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link"  to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/resume' component={Resume}></Route>
          </Switch>
          <div className="pc">    
          <Particles></Particles>
          </div>
        </Router>
        </div>
        <Footer className="page__footer"></Footer>
      </div>
      

    
  );
}