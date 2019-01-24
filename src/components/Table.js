import React from 'react'

const Table = ({ price, qty }) =>
  <table className="table table-bordered table-responsive">
    <thead>
      <tr>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{price.toFixed(2)}</td>
        <td>{qty}</td>
        <td>{(price * qty).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>

export default Table