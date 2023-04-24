import React from 'react'
import './Fredhomes.css'
import Feature from '../../components/Feature/Feature';


const Fredhomes = () => {
  return (
    <div className="fh_fredhomes section_margin" id="wgpt3">
    <div className="fh_fredhomes-feature">
      <Feature title="Fredhomes Limited" text="Suite D.13 Rukayyat Plaza; 93, Obafemi Awolowo Way, Jabi District, Abuja" tex = 'Parakin Obalufe Layout, Ile-Ife. Osun-State.' te = 'whatsapp - 0816-4371-494' />
    </div>
    <div className="fh_fredhomes-heading">
      <h1 className="gradient_text">Harnessing the possibilities beyond your imagination</h1>
      <p>Explore your interests</p>
    </div>
    <div className="fh_fredhomes-container">
      <Feature title="Sales" text="Sometimes the purpose of investing in Real Estate is to achieve profit in a speculative fashion, and thats where Fredhomes limited comes in. Land or landed? we provide liquidity for your real estate.  " />
      <Feature title="Lettings" text="You are either a freeholder of singular or numerous interests intrested in renting them out as Leaseholds or you are constituting a demand to convert your purchasing power to real estate interests for residential or other speculative purposes. Fredhomes Limited is the trusted platform to stand. we give value for your valuables " />
      <Feature title="Investment" text="At FredHomes, We either invest your interests in us or we invest your interests for you. In english terms, there's a program for you to invest in us as a trading company for absolute profits while simultaneously, another program exist for you to give us your interest to invest for us. we invest your interests by constructing your development and designing how the construction will look. Whatever the iknterest you invest in Fredhomes, your dividence is rest assured " />
    </div>
  </div>
  )
}

export default Fredhomes