// import Header from "./components/Header";
// import Footer from "./components/Footer"
// import Hero from "./components/Hero";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bio from "./components/Bio";



import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/projects">Project's</Link>
        </button>
        <button>
          <Link to="contact">Contact</Link>
        </button>
        <button>
          <Link to="bio">Bio</Link>
        </button>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/bio">
          <Bio/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
