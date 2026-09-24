import React from 'react'
import Navbar from '../Partials/Navbar'
import Hero from '../Home/Hero'
import Ulasan from '../Home/Ulasan'
import SemuaResep from '../Home/semuaResep'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SemuaResep/>
      <Ulasan/>
    </>
  )
}

export default Home
