import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
      <div className='bg-secondary'>
        <Navbar navLinks={navLinks} />
        <div className="container p-4">
          <Switch>
            <Route exact path="/">
              <Buttons />
            </Route>
            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/games">
              <h1>Games</h1>
            </Route>
            <Route path="/catalog">
              <h1>Catalog</h1>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
