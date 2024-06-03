import React, { useContext, useEffect, useState } from 'react';
import ExpenseContext from './ExpenseContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Pie} from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart(props) {
  const{income,expense,items}=useContext(ExpenseContext);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      },
    ],
  });
  useEffect(()=>{
    const calculateChartData=()=>{
      const total=props.name==="Income"?income:expense;
      const filteredItems=items.filter(item=>item.type===props.name);
      const amounts=filteredItems.map(item=>item.amount);
      const labels=filteredItems.map(item=>item.title);
      setData({
        labels:labels,
        datasets:[
          {
            data:amounts,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF5733',
              '#C70039',
              '#900C3F',
              '#581845'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF5733',
              '#C70039',
              '#900C3F',
              '#581845'
            ]
          }
        ]
      })
    }
    calculateChartData();
  },[income,expense,items,props.name]);
  return (
    <div className={`p-4 flex flex-col items-center gap-4 ${props.name==="Income"?'income-chart':'expense-chart'}`}>
        <h1 className='font-display text-2xl font-light'>{props.name==="Income"?income:expense}</h1>
        <div>
          {items && items.length > 1 ? <Pie data={data} /> : <p className='text-center text-xl'>No data available</p>}
        </div>
    </div>
  )
}
