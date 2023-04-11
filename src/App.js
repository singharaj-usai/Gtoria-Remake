import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Sections/Navbar/Navbar';
import Buttons from './Components/Buttons/Buttons';
import Forum from './Components/Forum/Forum';

function App() {

  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Forum', url: '/forum' },
    { name: 'Games', url: '/games' },
    { name: 'Catalog', url: '/catalog' }
  ];
  return (
    <div>
      <Navbar navLinks={navLinks} />
      <div className="container">

        <Buttons />
        <Forum />
      </div>
    </div>
  );
}

export default App;
