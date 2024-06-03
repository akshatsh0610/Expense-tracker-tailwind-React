import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import React from 'react';
import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import Context from './Context';
export default function RateUs() {
    const starCount=[1,2,3,4,5];
    const[rating,setRating]=useState(0);
    const[close,setClose]=useState(true);
    const[feedback,setFeedback]=useState('');
    const[error,setError]=useState('');
    const {theme}=useContext(Context);
    const handleClick=(idx)=>{
        setRating(idx+1);
    }
    const handleClose=()=>{
        setClose(true);
        setRating(0);
        setFeedback('');
    }
    const handleSubmit=()=>{
        if(rating===0){
            setError('Please provide star rating before submitting');
            return;
        }
        try {
            // Save feedback to localStorage
            localStorage.setItem('feedback', feedback);
            console.log('Feedback saved:', feedback);
        } catch (error) {
            console.error('Failed to save feedback:', error);
        }
        setRating(0);
        setClose(true);
        setFeedback('');
    }
    return (
        <div className='relative'>
            <a href='#' className='text-2xl font-medium' onClick={()=>setClose(false)}>Rate Us</a>
            <div className={`absolute top-20 right-1 p-4 flex flex-col gap-8 items-center justify-center nav ${theme} ${close===true?'hidden':''}`}>
                <FontAwesomeIcon icon={faXmark} className='absolute top-1 right-3 text-xl border rounded-full bg-slate-400 p-1 cursor-pointer hover:bg-red-500 text-white'
                    onClick={handleClose}
                />
                <div className=' flex gap-2 text-2xl'>
                    {
                        starCount.map((idx)=>(
                            <FontAwesomeIcon icon={faStar} className={`stars ${idx<rating?'active':''}`} key={idx} onClick={()=>handleClick(idx)}/>
                        ))
                    }
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <textarea placeholder='Write Feedback...' className='text-xl p-2 rounded-sm' cols="50" rows="8" value={feedback} onChange={(e)=>setFeedback(e.target.value)}></textarea>
                    <button className={`p-2 text-white text-xl rounded-md ${rating === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-400 hover:bg-purple-600'}`} onClick={handleSubmit} disabled={rating===0}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
