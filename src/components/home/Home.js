import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <form action=''>
        <input
          type='text'
          autoFocus
          placeholder='Enter name, nationality or club to search...'
        />
        <a href='/player-stats' type='submit' className='btn'>
          Search
        </a>
      </form>
    </div>
  );
};

export default Home;
