import React from 'react';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
