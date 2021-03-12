//This contains the coin search input and list of coins

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './CoinList.css';
import Coin from './Coin';
import { coinList } from '../api/coinGecko';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  //fetch the coinList URL
  //this returns the data needed to build 
  //the list of all cryptos with basic 
  //price, volume, marketcap data
  useEffect(() => {
    axios.get(coinList)
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  //handle user input to the search form
  const handleFormChange = e => {
    setSearch(e.target.value);
  }

  //filter coin list based on search input
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='coin-list-container'>
      <div className='coin-search'>
        <h2 className='coin-search-text'>Search a currency</h2>
        <form>
          <input 
            type='text'
            placeholder='Search'
            className='coin-input'
            onChange={handleFormChange}/>
        </form>
      </div>
      <div className='table-info'>
        <span className='name'>Name</span>
        <span className='symbol'>Symbol</span>
        <span className='price'>Price</span>
        <span className='volume'>Volume</span>
        <span className='market_cap'>Market Cap</span>
      </div>
      <div>
        {filteredCoins.map(coin => {
          return (
            <Coin 
              key={coin.id}
              id={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              price_change_percentage_24h={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CoinList;