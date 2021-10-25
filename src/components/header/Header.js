import React from 'react';

import './Header.css';
import icon from '../assets/icon.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-img'>
        <img src={icon} alt='' />
      </div>
      <div className='header-links'>
        <a href='/' className='active'>
          Home
        </a>
        <a href='/help'>Help?</a>
      </div>
    </div>
  );
};

export default Header;
