import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <form action=''>
        <input
          type='text'
          autoFocus
          placeholder='Enter name, nationality, club to search'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
