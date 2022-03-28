import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('default')

  const handleView = (page) => {
    setView(page)
  }

  return (
    <div>
        <Header
          handleView={handleView}>
        </Header>
      <main>
        {(() => {
          switch (view) {
            default:
              return <Carousel></Carousel>
            case 'portfolio':
              return <Portfolio></Portfolio>
            case 'about':
              return <About handleView={handleView}></About>
            case 'contact':
              return <Contact></Contact>
          }
        })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
