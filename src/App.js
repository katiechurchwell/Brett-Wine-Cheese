import React, { useState } from 'react';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  // const [aboutSelected, setAboutSelected] = useState(false);
  const [view, setView] = useState('default')

  const handleView = (page) => {
    setView(page)
  }

  return (
    <div>
      <header>
        <Nav
          handleView={handleView}>
        </Nav></header>
      <main>
        {(() => {
          switch (view) {
            default:
              return <Carousel></Carousel>
            case 'portfolio':
              return <Portfolio></Portfolio>
            case 'about':
              return <About></About>
            case 'contact':
              return <Contact></Contact>
          }
        })()}
      </main>
    </div>
  );
}

export default App;
