import React from 'react'
import { Features, Fredhomes, Header, Possibility, Footer, Blog } from '../../container'
import {  Cta, Form } from '../../components'
import Brand from '../Brand/Brand'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <Fredhomes />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default Home