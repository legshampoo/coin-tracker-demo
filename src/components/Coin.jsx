//This is the coin component that appears in the list on CoinListPage
//each row is a 'coin'
//clicking on this links to the CoinDetailsPage for each coin

import React from 'react';
import { Link } from 'react-router-dom';

import './Coin.css';

const Coin = ({ id, name, image, symbol, volume, price, price_change_percentage_24h, marketcap }) => {
  
  return (
    <Link className='coin-container' 
      to={{
        pathname: `/coin/${id}`,
        query: {
          name: `${name}`,
          image: `${image}`,
          price: `${price}`  
        }
      }}>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='coin'/>
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='price'>
          { price_change_percentage_24h < 0 
            ? (<i className="fas fa-sort-down"></i>)
            : (<i className="fas fa-sort-up"></i>)
          }
          <span className=
            { price_change_percentage_24h < 0
              ? 'price-value-down'
              : 'price-value-up'
            }
          >${price.toLocaleString(undefined, { minimumFractionDigits: 2})}</span>
        </div>
        <div className='coin-data'>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  )
}

export default Coin;