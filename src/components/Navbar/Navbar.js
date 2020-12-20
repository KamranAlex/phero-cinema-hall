import React from 'react';
import logo from './hero-logo.png';
const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        <img
          src={logo}
          height='50'
          className='d-inline-block align-top'
          alt=''
        />
        <span style={{ fontFamily: 'cursive', fontWeight: '600' }}>
          {' '}
          Cinema
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
