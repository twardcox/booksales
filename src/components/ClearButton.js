import React from 'react'

const ClearButton = ({ handler, label }) =>
  <div>
    <button onClick={handler} className='btn btn-primary'>{label}</button>
  </div>

export default ClearButton