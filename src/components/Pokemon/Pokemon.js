import React from 'react'
import './Pokemon.css'
import { Link } from 'react-router-dom'

const Pokemon = (props) => {
  return (
    <div className='pokemon'>
        <div className='pokemon-name'>{props.name}</div>
      <Link to={`/pokemon/${props.id}`}>
        <div className='img'>
            <img className='pokemon-img' alt='pokemon img' src={props.image}></img>
        </div>
        </Link>
    </div>
  )
}

export default Pokemon