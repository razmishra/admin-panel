import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto'

function DisplayLineChart({coinHistory,time}) {
  var Time=""
  if(time==='7d'){
    Time="Weekly"
  }
  else if(time==="1y"){
    Time="Monthly"
  }
  else Time="Yearly"
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

 
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label:Time,
        data: coinPrice,
        fill: true,
        backgroundColor: '#E5DDD7',
        borderColor: '#9E8774',
      },
    ],
  };
  
  return (
    <div style={{height:'300px',marginLeft:"30px",marginTop:"5px"}}>
     <Line data={data}/>
    </div>
  )
}

export default DisplayLineChart
