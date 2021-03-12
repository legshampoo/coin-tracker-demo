//this is the history Chart

import React, { useRef, useEffect } from 'react'
import Chartjs from 'chart.js';

import './HistoryChart.css';
import { historyOptions } from '../chartConfig/chartConfig';

const HistoryChart = ({ id, data }) => {
  const chartRef = useRef();

  useEffect(() => {
    //first make sure we grab the chartRef
    if(chartRef && chartRef.current){
      
      new Chartjs(chartRef.current, {
        type: 'line',
        data: {
          datasets: [{
            label: `${id} price`,
            data: data.month,
            backgroundColor: 'rgba(174, 305, 194, 0.5)',
            borderColor: 'rgba(174, 305, 194, 0.4)',
            pointRadius: 0,
          }]
        },
        options: {
          ...historyOptions
        }
      })
    }

  }, [id, data.month])

  return (
    <div className='history-chart-container'>
      <canvas ref={chartRef} id='coinChart' className='chart' width={250} height={250}></canvas>
    </div>
  )
}

export default HistoryChart
