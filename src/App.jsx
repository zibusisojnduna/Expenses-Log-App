import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransaction from './components/add'
import DisplayTransaction from './components/displayTransaction'
import Home from './components/home'

import Login from './components/login'

function App() {
  const [transaction, setTransaction] = useState([])

  function add(transactionItem, amount, transactionType){
    setTransaction((transaction)=>[...transaction, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}])
    
  }
console.log(transaction)

  return (
    
      <div className='container'>
        
          

         
            <Home add={add} transaction={transaction}/>
          
      
     
    </div>

    
   
  )
}

export default App
