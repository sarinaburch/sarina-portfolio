import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Contact from './components/Contact';
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Jumbotron />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
