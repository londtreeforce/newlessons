import React from 'react'
import Banners from '../img/banner.svg'
import './css/banner.css';

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <img src={Banners} width="1230" height="545"/>
      </div>
    </>
  )
}

export default Banner