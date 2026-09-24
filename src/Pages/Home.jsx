import React from 'react'
import Navbar from '../Partials/Navbar'
import Hero from '../Home/Hero'
import Ulasan from '../Home/Ulasan'
import SemuaResep from '../Home/semuaResep'
import Footer from '../Partials/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SemuaResep/>
      <Ulasan/>
      <Footer/>
    </>
  )
}

export default Home
