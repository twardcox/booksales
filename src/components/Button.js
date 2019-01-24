import React from 'react'

const Button = ({ qty, handleClick, index, changeBy, label }) =>
<button disabled={label == "Less" && qty < 1 ? true : false} onClick={() => handleClick(index, changeBy)} className='btn btn-primary'>{label}</button>

export default Button