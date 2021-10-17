/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <Link to="/home">홈으로</Link>
      <br/>
      <Link to="/beerList">술 목록</Link>
    </div>
  )
}

export default Cart
