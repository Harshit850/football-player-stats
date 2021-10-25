import React from 'react';

import playerData from '../assets/data';
import './Home.css';

const Home = ({ data, setData, handleStats }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    handleStats();

    // filter the data
    var foundPlayer = null;
    playerData.forEach((player) => {
      data = data.toLowerCase();
      const name = player.name.toLowerCase();
      const nationality = player.nationality.toLowerCase();
      const club = player.club.toLowerCase();
      if (data === name || data === nationality || data === club) {
        foundPlayer = player;
        return;
      }
    });
    setData(foundPlayer);
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
