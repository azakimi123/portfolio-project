import React from 'react';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
