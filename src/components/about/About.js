import React from 'react';

import './About.css';

const About = ({ data, handleStats }) => {
  if (data === null) {
    return (
      <div className='container'>
        <h1>Nothing Found!</h1>
        <button className='btn btn-info mt-2' onClick={handleStats}>
          Search Again?
        </button>
      </div>
    );
  }

  return (
    <div id='main'>
      <h1>{data.name}</h1>
      <div className='player-div'>
        <div className='player-img'></div>
        <div className='player-info'>
          <div className='player-btns'>
            <button className='btn btn-success'>Value : {data.value}</button>
            <button className='btn btn-success'>Wage: {data.wage}</button>
          </div>
          <div className='player-stats'>
            <h4>
              Age: <span>{data.age}</span>
            </h4>
            <h4>
              Height: <span>{data.height}</span>
            </h4>
            <h4>
              Weight: <span>{data.weight}</span>
            </h4>
            <h4>
              Club: <span>{data.club}</span>
            </h4>
            <h4>
              Crossing: <span>{data.crossing}</span>
            </h4>
            <h4>
              Short Passing: <span>{data.short_passing}</span>
            </h4>
            <h4>
              Preferred Foot: <span>{data.preferred_foot}</span>
            </h4>
            <h4>
              Position: <span>{data.position}</span>
            </h4>
            <h4>
              Jersey Number: <span>{data.jersey_number}</span>
            </h4>
            <h4>
              Joined: <span>{data.joined}</span>
            </h4>
            <h4>
              Wrok Rate: <span>{data.work_rate}</span>
            </h4>
            <h4>
              Heading Accuracy: <span>{data.heading_accuracy}</span>
            </h4>
            <h4>
              Contract Valid Till <span>{data.contract_valid}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
