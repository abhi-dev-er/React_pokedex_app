import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonData from '../components/PokemonData/PokemonData'

const CustomRoutes = () => {
  return (
    <Routes>
    <Route path='/' element= {<Pokedex />}/>
    <Route path='/pokemon/:id' element={<PokemonData />}/>
   </Routes>
  )
}

export default CustomRoutes