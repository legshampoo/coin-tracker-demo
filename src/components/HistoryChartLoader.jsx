//this is the parent component for the History Chart
//we make the API call and format the data here 
//to simplify the child chart component

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HistoryChart from './HistoryChart';
import { history_url } from '../api/coinGecko';

const HistoryChartLoader = ({ id }) => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const formatChartData = data => {
    return data.map(d => {
      return {
        t: d[0],
        y: d[1].toFixed(2)
      }
    })
  }
  
  //here we call the history chart api and get the day, month, and year data
  //the chart is currently displaying the month, but with a litte more work
  //we could add functionality to display the different time scales
  useEffect(() => {
    setIsLoading(true);
    const URL = `${history_url}${id}/market_chart`;
    axios.all([
      axios.get(URL, {
        params: {
          vs_currency: 'usd',
          days: '1'
        }
      }),
      axios.get(URL, {
        params: {
          vs_currency: 'usd',
          days: '30'
        }
      }),
      axios.get(URL, {
        params: {
          vs_currency: 'usd',
          days: '365'
        }
      })
    ])
    .then(axios.spread((day, month, year) => {
      setChartData({
        day: formatChartData(day.data.prices),
        month: formatChartData(month.data.prices),
        year: formatChartData(year.data.prices)
      })
      setIsLoading(false);
    }))
    .catch(error => {
      console.log(error);
    })
      
    }, [id]);

  const renderData = () => {
    if(isLoading){
      return (
        <div className='loading'>Loading...</div>
      )
    }
    return (
      <div>
        <HistoryChart id={id} data={chartData}/>
      </div>
    )
  }

  return renderData();
}

export default HistoryChartLoader;
