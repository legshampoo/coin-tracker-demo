//this is the header for the CoinDetail page

import React from 'react'

import './CoinDetailsHeader.css';

const CoinDetailsHeader = ({ image, price, name }) => {
  return (
    <div className='coin-header'>
      <div className='header-left'>
        <img className='image-logo' src={image} alt='coin'/>
        <span>{name}</span>
      </div>
      <div className='header-right'>
        <span>${Number(price).toLocaleString()}</span>
      </div>
    </div>
  )
}

export default CoinDetailsHeader
