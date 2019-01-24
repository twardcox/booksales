import React from 'react'
import Button from './Button'
import Table from './Table'

const ItemCard = props =>
  <div className='col-sm-4'>
    <div className='card text-black bg-success text-center' style={{ margin: '4rem', padding: '1rem', border: '1px solid rgba(0,0,0, 0.125' }} >
      <div className='card-header bg-primary text-white' >
        <p>{props.category}</p>
      </div>
      <div className='card-body' >
        <h4 className='card-title' >{props.title}</h4>
        <p className='cardtext' >{props.text}</p>
      </div>
      <Table {...props} />
      <Button {...props} changeBy={-1} label='Less' />
      <Button {...props} changeBy={1} label='More' />
    </div>
  </div>

export default ItemCard