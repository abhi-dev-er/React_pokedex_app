import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon'


const PokemonList =() => {
  
    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexUrl, setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');


 async function downLoadData(){
    const res = await axios.get(pokedexUrl);
    const pokeResults = res.data.results;

    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous)
    const pokeResultPromise = pokeResults.map((pokemon) => axios.get(pokemon.url));
    const pokemonData = await axios.all(pokeResultPromise);
    const result = pokemonData.map((pokeData)=>{
        const pokemon = pokeData.data;
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types
        }
    });
    setPokemonList(result);

}


 useEffect(()=>{
  downLoadData();
}, [pokedexUrl])

  return (
    <div className='pokemon-box'>
         <div className='pokemon-wrapper'>
            {
             pokemonList.map((p) => <Pokemon name ={p.name} image={p.image} key={p.id}/>)
            }
         </div>

         <div className='buttons'>
            <button disabled={prevUrl == null} onClick={()=> setpokedexUrl(prevUrl)}>Prev</button>
            <button disabled={nextUrl == null}onClick={()=> setpokedexUrl(nextUrl)}>Next</button>
         </div>
         
         
    </div>
  )
}

export default PokemonList