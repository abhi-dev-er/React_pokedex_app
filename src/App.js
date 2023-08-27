import React from 'react'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'

const App = () => {
  return (
    <div>
      <div className='box'>
     <Link id='link' to='/'><h1 className='heading'>Pokedex</h1></Link>
      </div>
     <CustomRoutes />
    </div>
  )
}

export default App
