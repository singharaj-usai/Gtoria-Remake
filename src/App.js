import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './Sections/Alert/Alert';
import Navbar from './Sections/Navbar/Navbar';
import Buttons from './Components/Banner/Banner';
import Forum from './Components/Forum/Forum';
import TOS from './Components/TOS/TOS';
import Auth from './Components/Auth/Auth';
import Footer from './Sections/Footer/Footer';

function App() {

  const navLinks = [
    { name: 'Forum', url: '/forum' },
    { name: 'Games', url: '/games' },
    { name: 'Catalog', url: '/catalog' }
  ];

  return (
    <Router>
      <div className='bg-secondary'>
      
        <Navbar navLinks={navLinks} />
        <Alert />
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
            <Route path="/tos">
              <TOS/>
            </Route>
            <Route path="/auth">
              <Auth/>
            </Route>
          </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
