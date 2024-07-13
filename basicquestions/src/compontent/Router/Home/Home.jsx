import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <Link to ='/about'>About</Link>
    <p>This is home page</p>
    </>
  )
}

export default Home
