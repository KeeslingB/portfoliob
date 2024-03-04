import './App.css';
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Bio from "./components/Bio";
import React from "react";

// import Header from "./components/Header";
import Footer from "./components/Footer"
// import landingPage from "./assets/landingpage.avif";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


import Nav from "./components/Nav";






function App() {

  return (
    <>
    <Nav/>
    <Footer/>
    </>
  )
}

export default App




    /* <Router>
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
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
         <Route path="/projects" element={<Projects />}>
        </Route>
        <Route path="/contact" element={<Contact/>}>
        </Route>
        <Route path="/bio" element={<Bio/>}>
        </Route>
      </Routes> 
</Router> */