import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <header><Nav></Nav></header>
      <Portfolio></Portfolio>
      <About></About>
    </div>
  );
}

export default App;
