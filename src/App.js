import { useState,useEffect } from 'react';
import './App.css';
import MainPanel from './MainPanel';
import NavBar from './NavBar';
import SidePanel from './SidePanel';
import Context from './Context';
import ExpenseContext from './ExpenseContext';
function App() {
    const[income,setIncome]=useState(0);
    const[expense,setExpense]=useState(0);
    const [theme,setTheme]=useState('light');
    const [items,setItem]=useState([
      {
        type:'',
        title:'',
        amount:0,
        date:'',
        icon:null
      }
    ]);
    useEffect(() => {
      document.body.className = theme === 'dark' ? 'dark-mode' : '';
    }, [theme]);
    return (
      <Context.Provider value={{theme,setTheme}}>
          <div className={`App ${theme} flex flex-col max-h-full`}>
            <NavBar/>
            <ExpenseContext.Provider value={{items,setItem,income,setIncome,expense,setExpense}}>
              <div className='flex flex-col-reverse md:flex-row p-4 md:p-7 gap-4'>
                <SidePanel/>
                <MainPanel/>
              </div> 
            </ExpenseContext.Provider>
          </div>
      </Context.Provider>
    );
}

export default App;
