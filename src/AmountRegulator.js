import React from 'react';
import Context from './Context';
import { useContext } from 'react';
import Chart from './Chart';
import './App.css';
export default function AmountRegulator(props) {
  const{theme}=useContext(Context);
  return (
    <div className={`card ${theme} flex flex-col items-center justify-center p-4 rounded-md`}>
        <h1 className={`text-3xl font-display font-medium ${props.name==="Income"?'income':'expense'}`}>{props.name}</h1>
        <Chart name={props.name}/>
    </div>
  )
}
