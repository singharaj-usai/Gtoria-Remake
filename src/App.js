import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Sections/Navbar/Navbar';
import Buttons from './Components/Buttons/Buttons';
import Forum from './Components/Forum/Forum';
import Footer from './Sections/Footer/Footer';

function App() {

  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Forum', url: '/forum' },
    { name: 'Games', url: '/games' },
    { name: 'Catalog', url: '/catalog' }
  ];
  return (
    <div className='bg-secondary'>
      <Navbar navLinks={navLinks} />
      <div className="container p-4">

       
        <Forum />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
