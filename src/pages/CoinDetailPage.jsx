//this is the page for the coin details, including the history chart

import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import HistoryChartLoader from '../components/HistoryChartLoader';
import CoinData from '../components/CoinData';
import CoinDetailsHeader from '../components/CoinDetailsHeader';

const CoinDetailPage = () => {
  const [data, setData] = useState({
    name: '',
    image: '', 
    price: 0
  })

  //id is passed via react router in the URL
  const { id } = useParams();
  
  //useLocation grabs the params that are passed via react-router
  const location = useLocation();

  useEffect(() => {
    // console.log(location.state))
    // const { name, image, price } = location.state;
    // setName(name)
    setData(data =>({
      ...data,
      ...location.state
    }))

  }, [location])
  
  return (
    <div>
      <CoinDetailsHeader 
        name={data.name}
        // name={data.name}
        image={data.image}
        price={data.price}
        // name={'test'}
        // image={'test'}
        // price={'test'}
      />
      <HistoryChartLoader id={id} />
      <CoinData id={id}/>
    </div>
  )
}

export default CoinDetailPage;
