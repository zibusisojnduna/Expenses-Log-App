import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransaction from './components/add'
import DisplayTransaction from './components/displayTransaction'
import Home from './components/home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './components/login'

function App() {
  const [transaction, setTransaction] = useState([])

  function add(transactionItem, amount, transactionType){
    setTransaction((transaction)=>[...transaction, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}])
    
  }
console.log(transaction)

  return (
    <Route>
      <div className='container'>
        <Switch/>

          <Route exact path="./">
            <Login/>
          </Route>

          <Route path='/home'>
            <Home add={add} transaction={transaction}/>
          </Route>
      
     
    </div>
    </Route>
    
   
  )
}

export default App
