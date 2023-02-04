import React, { useRef } from 'react';
import './css/navbar.css';
import Logo from '../img/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiv-nav");
  }

  return (
    <header>
      <nav ref={navRef}>
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
      </nav>
      
      
      
    </header>


  );
}

export default Navbar






