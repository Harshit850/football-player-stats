import React from 'react';

import './About.css';

const About = () => {
  return (
    <div id='main'>
      <h1>Player Name</h1>
      <div className='player-div'>
        <div className='player-img'></div>
        <div className='player-info'>
          <div className='player-btns'>
            <button className='btn btn-success'>Overall : 67</button>
            <button className='btn btn-success'>Potential: 67</button>
          </div>
          <div className='player-stats'>
            <h4>
              Age: <span>43</span>
            </h4>
            <h4>
              Height: <span>6'4 - 1.95m</span>
            </h4>
            <h4>
              Weight: <span>6'4lbs - 1.95lbs</span>
            </h4>
            <h4>
              Preferred Foot: <span>Right</span>
            </h4>
            <h4>
              Position: <span>RDM</span>
            </h4>
            <h4>
              Jersey Number: <span>87</span>
            </h4>
            <h4>
              Weak Foot: <span>4 stars</span>
            </h4>
            <h4>
              Skills Move: <span>5 stars</span>
            </h4>
            <h4>
              Work Rate(Attack - Defense): <span>High / Low</span>
            </h4>
            <h4>
              International Reputation: <span>5 stars</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
