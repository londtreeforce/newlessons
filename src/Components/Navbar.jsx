import React from 'react';
import './css/navbar.css';
import Logo from '../img/logo.svg';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='navbar-link'>
        {/*Warning, it's href down */}
        <a href="#catalogue">CATALOGUE</a>
        <a href="#catalogue">FASHION</a>
        <a href="#catalogue">FAVOURITE</a>
        <a href="#catalogue">LIFESTYLE</a>
        <a href="">SIGNUP</a>
      </div>


    </div>



  );
}

export default Navbar






