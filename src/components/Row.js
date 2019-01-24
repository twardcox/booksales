import React from 'react'
import ItemCard from './ItemCard'

const Row = props =>
  <div className='row' >
    {props.catalog.map((item, index) => <ItemCard key={index} index={index}{...item} {...props} />)}
  </div>

export default Row