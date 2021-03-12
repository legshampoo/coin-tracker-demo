//this is the page for the coin details, including the history chart

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import HistoryChartLoader from '../components/HistoryChartLoader';
import CoinData from '../components/CoinData';
import CoinDetailsHeader from '../components/CoinDetailsHeader';

const CoinDetailPage = () => {
  //id is passed via react router in the URL
  const { id } = useParams();
  
  //useLocation grabs the params that are passed via react-router
  const location = useLocation();
  const { name, image, price } = location.query;
  
  return (
    <div>
      <CoinDetailsHeader 
        name={name}
        image={image}
        price={price}
      />
      <HistoryChartLoader id={id} />
      <CoinData id={id}/>
    </div>
  )
}

export default CoinDetailPage;
