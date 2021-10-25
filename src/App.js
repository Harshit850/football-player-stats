import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  const [data, setData] = useState('');
  const [showStats, setShowStats] = useState(false);

  const handleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          {!showStats && (
            <Home data={data} setData={setData} handleStats={handleStats} />
          )}
          {showStats && <About data={data} handleStats={handleStats} />}
        </Route>
        <Route path='/help' exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
