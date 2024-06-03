import React, { useContext, useState } from 'react';
import './App.css';
import Context from './Context';
import Tracker from './Tracker';
import TimeLine from './TimeLine';
export default function MainPanel() {
  const{theme}=useContext(Context);
  const[btn,setBtn]=useState(true)
  return (
    <div className={`middle-panel ${theme} p-4 rounded-md w-full flex flex-col gap-6`}>
      <div className='flex gap-4 items-start'>
        <div className={`btn ${btn===true?'active':''}`} onClick={()=>{setBtn(true)}}>
          Expense Tracker
        </div>
        <div className={`btn ${btn===false?'active':''}`} onClick={()=>{setBtn(false)}}>
          Timeline
        </div>
      </div>
      {
        btn===true?(<Tracker/>):(<TimeLine/>)
      }
    </div>
  )
}
