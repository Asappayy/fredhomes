import React from 'react';
import people from '../../Assets/people.png';
import house  from '../../Assets/house.png';
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => (
  <div className="fh_header section_padding" id="home">
    <div className="fh_header-content">
      <h1 className="gradient_text">FredHomes Real Estate Conference 1.0</h1>
      <p>Click the button below to register the debut edition of our real esatate conference, happening live on the 6th of May at top rank hotel, solomon lar way, Jabi F.C.T Abuja. The Theme this year is Real Estate: A GoldMine Of The Future. </p>

      <div className="fh_header-content_input">
        <input type="email" placeholder="Register Here" />
       <Link to='/form'> <button type="button">Get Started</button> </Link>
      </div>

      <div className="fh_header-content_people">
        <img src={people} />
        <p> Over 45 people registerd in the last 24 hours</p>
      </div>
    </div>

    <div className="fh_header-image">
      <img src={house} />
    </div>
  </div>
);

export default Header;