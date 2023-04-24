import React from 'react';
import './Cta.css';
import { Link } from 'react-router-dom';

const Cta = () => (
  <div className="fh_cta">
    <div className="fh_cta-content">
      <p>Real Estate: A GoldMine Of The Future.</p>
      <h3>Register your participation at the Fredhome Conference .</h3>
    </div>
    <div className="fh_cta-btn">
      <Link to = '/form'><button type="button">Get Started</button> </Link>
    </div>
  </div>
);

export default Cta;