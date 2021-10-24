import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <form action=''>
        <input type='text' autoFocus />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
