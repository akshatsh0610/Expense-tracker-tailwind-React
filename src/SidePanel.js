import React from 'react';
import './App.css';
import AmountRegulator from './AmountRegulator';
export default function SidePanel() {
  return (
    <div className='flex flex-col gap-4'>
      <AmountRegulator name={'Income'}/>
      <AmountRegulator name={'Expense'}/>
    </div>
  )
}
