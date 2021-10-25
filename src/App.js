import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/player-stats' exact>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
