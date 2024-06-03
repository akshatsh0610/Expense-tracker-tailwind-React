import React, { useContext, useState,useEffect } from 'react';
import Context from './Context';
import ExpenseContext from './ExpenseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Tracker() {
  const{theme}=useContext(Context);
  let icon=faPlus;
  const [type,setType]=useState('Income');
  const [date,setDate]=useState('');
  const [title,setTitle]=useState('');
  const [amount,setAmount]=useState('');
  const { items, setItem, setIncome , setExpense} = useContext(ExpenseContext);  
  const handleClick=(event)=>{
    event.preventDefault();
    type==='Income'?icon=(faPlus):icon=(faMinus);
    setItem((prevItems) => [...prevItems, { type, title, amount:parseInt(amount), date,icon }]);
    setAmount('');
    setDate('');
    setType('Income');
    setTitle('');
  }
  const handleDelete=(idx)=>{
    setItem((prevItems) => prevItems.filter((_, index) => index !== idx));
  }
  const calculateTotal=()=>{
    return items.reduce((acc, item) => {
      return item.type === 'Income' ? acc + item.amount : acc - item.amount;
    }, 0);
  };
  const calculateIncome=()=>{
    return items.reduce((acc, item) => {
      return item.type === 'Income' ? acc + item.amount : acc;
    }, 0);
  }
  const calculateExpense=()=>{
    return items.reduce((acc, item) => {
      return item.type === 'Income' ? acc  : acc + item.amount;
    }, 0);
  }
  let total=calculateTotal();
  useEffect(() => {
    setIncome(calculateIncome());
    setExpense(calculateExpense());
  }, [items]);
  return (
      <div className={`flex flex-col tracker`}>
        <h1 className={`self-center gradient-text text-4xl font-semibold font-body ${theme}`}>Expense Tracker</h1>
        <h3 className='self-center mt-3 text-2xl'>Balance</h3>
        <p className={`self-center text-4xl ${total>=0?'text-green-400':'text-red-400'} font-medium`}>${total}</p>
        <div className='flex justify-between gap-4 p-4'>
          <div className='flex flex-col items-center justify-center gap-4 mt-4 flex-1'>
            <select name='Type' className='p-4 text-xl w-1/2 rounded-md text-slate-500' value={type} onChange={(e)=>setType(e.target.value)}>
              <option>Income</option>
              <option>Expense</option>
            </select>
            <input type='text' placeholder='Title' className={`p-4 text-xl w-1/2 rounded-md ${theme==='dark'?'text-black placeholder-slate-500':''}`} value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input placeholder='Amount' className={`p-4 text-xl w-1/2 rounded-md ${theme==='dark'?'text-black placeholder-slate-500':''}`} value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <input type='text' placeholder='Date' className={`p-4 text-xl w-1/2 rounded-md ${theme==='dark'?'text-black placeholder-slate-500':''}`} value={date} onChange={(e)=>setDate(e.target.value)}/>
            <button className='mt-6 self-center w-fit pt-3 pb-3 pl-6 pr-6 text-xl bg-green-400 rounded-sm hover:bg-green-500' onClick={handleClick}>
              Add Item
            </button>
          </div>
          <div className='h-full border border-gray-300 mx-4'></div>
          <div className='flex-1 mt-4'>
              <div className='flex flex-col gap-3 justify-center'>
                {
                  items.length===1?(
                    <h1 className='text-6xl self-center mt-20 font-medium'>No Entries Yet</h1>
                  ):(
                      items.map((item,idx)=>(
                        (item.title==='' || item.date==='' || item.amount==='')?(
                          null
                        ):(
                            <div className={`flex items-center justify-between gap-2 text-2xl list ${theme} rounded-md p-4 md:text-xl sm:text-sm`} key={idx}>
                              <div className='flex gap-3 items-center'>
                                <FontAwesomeIcon icon={item.icon}/>
                                <h3>{item.title}</h3>
                                <h3 className={`font-semibold ${item.type==='Income'?'text-blue-400':'text-red-400'}`}>
                                  $ {item.amount}
                                </h3>
                              </div>
                              <div className='flex gap-6 items-center mr-5 md:gap-2'>
                                <h3>{item.date}</h3>
                                <FontAwesomeIcon icon={faTrash} className='cursor-pointer' onClick={()=>handleDelete(idx)}/>
                              </div>
                            </div>
                        )
                    ))
                  )
                }
              </div>
          </div>
        </div>
      </div>
  )
}
