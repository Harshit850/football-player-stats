import React from 'react';

import './Home.css';

const Home = ({ setData, handleStats }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    handleStats();
  };
  return (
    <div className='home'>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type='text'
          autoFocus
          required
          placeholder='Enter name, nationality or club to search...'
          onChange={(e) => setData(e.target.value)}
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
