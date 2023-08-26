import React from 'react'
import './Pokemon.css'

const Pokemon = (props) => {
  return (
    <div className='pokemon'>
        <div className='pokemon-name'>{props.name}</div>
        <div className='img'>
            <img className='pokemon-img' alt='pokemon img' src={props.image}></img>
        </div>
    </div>
  )
}

export default Pokemon