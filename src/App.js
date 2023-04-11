import React from 'react';
import Navbar from './Sections/Navbar/Navbar';
import Buttons from './Components/Buttons/Buttons';

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
        <h1>My App</h1>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
