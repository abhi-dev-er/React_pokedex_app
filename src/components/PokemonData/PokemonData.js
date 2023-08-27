import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PokemonData.css'

const PokemonData = () => {
 const {id} = useParams();
 const [pokemon, setPokemon] = useState({});
 async function DownLoadPokemondData(){
    const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response)
   setPokemon({
    name: response.data.name,
    image: response.data.sprites.other.dream_world.front_default,
    weight: response.data.weight,
    height: response.data.height,
    types: response.data.types.map((t)=> t.type.name)
    
});

}


 useEffect(()=>{
 DownLoadPokemondData();
 },[])
  return (
    <div className='pokemonData-box'>
      <div className='pokemon-name'>name: {pokemon.name}</div>
      <img className='pokemon-img' src={pokemon.image} alt='pokemon-details' ></img>
      <div className='w-btn'> <button>Weight: {pokemon.weight}</button> </div>
      <div className='h-btn'><button>Height: {pokemon.height}</button></div>
      <div className='pokemon-types'>
         {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>

       

    </div>
  );
}

export default PokemonData