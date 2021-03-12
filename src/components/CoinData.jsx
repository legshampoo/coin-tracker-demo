//this is the coin data on the Coin details page
//this sits below the history chart

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CoinData.css';
import { coin_data_url } from '../api/coinGecko';

const CoinData = ({ id }) => {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { 
    current_price, 
    circulating_supply, 
    high_24h, 
    low_24h, 
    market_cap, 
    total_volume 
  } = coinData;
  
  useEffect(() => {
    setIsLoading(true);
    axios.get(coin_data_url, {
      params: {
          vs_currency: 'usd',
          ids: `${id}`
        }
      })
      .then(res => {
        setCoinData(res.data[0]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id])

  const renderData = () => {
    if(isLoading){
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className='coin-data-container'>
        <div className='header-row'>
          <span>Market Stats</span>
        </div>
        <div className='row'>
          <span>Price</span>
          <span>${current_price.toLocaleString()}</span>
        </div>
        <div className='row'>
          <span>Market Cap</span>
          <span>${market_cap.toLocaleString()}</span>
        </div>
        <div className='row'>
          <span>Trading Volume</span>
          <span>${total_volume.toLocaleString()}</span>
        </div>
        <div className='row'>
          <span>Circulating Supply</span>
          <span>{circulating_supply}</span>
        </div>
        <div className='row'>
          <span>24H High</span>
          <span>${high_24h.toLocaleString()}</span>
        </div>
        <div className='row'>
          <span>24H Low</span>
          <span>${low_24h.toLocaleString()}</span>
        </div>
      </div>
    )
  }

  return renderData();
}

export default CoinData
