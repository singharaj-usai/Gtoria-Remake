import React from 'react';
import Navbar from './Sections/Navbar/Navbar';
import Buttons from './Components/Buttons/Buttons';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>My App</h1>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
