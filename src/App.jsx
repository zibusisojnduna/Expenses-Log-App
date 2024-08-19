import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransaction from './components/add'


function App() {
  const [transaction, setTransaction] = useState([])

  return (
    <div className='container'>
      <AddTransaction/>
    </div>
   
  )
}

export default App
