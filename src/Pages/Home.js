/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/beerList">술 목록</Link>
      <br/>
      <Link to="/cart">카트</Link>
    </div>
  )
}

export default Home
