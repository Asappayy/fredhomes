import React from 'react';
import Logo from '../../Assets/logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="fh_footer section_padding">
    <div className="fh_footer-heading">
      <h1 className="gradient_text">Fredhomes Ltd, Harnessing The Odds In your Favor</h1>
    </div>

    <div className="fh_footer-btn">
      <p>Speak To An Agent</p>
    </div>

    <div className="fh_footer-links">
      <div className="fh_footer-links_logo">
        <img src={Logo} alt="fhlogo" />
        {/* <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p> */}
      </div>
      <div className="fh_footer-links_div">
        <h4>Links</h4>
        <Link to = 'https://Facebook.com/Fredproperty'> <p>Facebook</p> </Link>
        <p>Properties</p>
        <p>Freehold</p>
        <p>Leasehold</p>
      </div>
      <div className="fh_footer-links_div">
        <h4>Fredhomes Ltd.</h4>
        <p>Rent A Property</p>
        <p>Sell A Property</p>
        <p>Lease Your Property </p>
        <Link to ="/form"><p>FHC 1.0 </p> </Link>
      </div>
      <div className="fh_footer-links_div">
        <h4>Get in touch</h4>
        <p>Suite D.13 Rukayyat Plaza; 93, Obafemi Awolowo Way, Jabi District, Abuja </p>
        <p>Parakin Obalufe Layout, Ile-Ife. Osun-State.</p>
        <p>0708-385-3950 | 0905-870-2820</p>
        <Link to = 'https://instagram.com/Fredhomes'> <p>Instagram</p> </Link> 
      </div>
    </div>

    <div className="fh_footer-copyright">
      <p>@2023 All rights reserved. Fredhomes Ltd. </p>
      <Link to ='/'><p>Whatsapp - 0816-4371-494</p> </Link>
    </div>
  </div>
);

export default Footer; 