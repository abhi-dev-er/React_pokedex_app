import React from 'react'
import Search from '../Search/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'

const Pokedex = () => {
  return (
    <div className='pokedex-box'>
     <h1 id='heading'>Pokedex</h1>
     <Search />
     <PokemonList />
    </div>
  )
}

export default Pokedex