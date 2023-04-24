import React from 'react';
import stre from '../../Assets/stre.png';
import './Possibility.css';

const Possibility = () => (
  <div className="fh_possibility section_padding" id="possibility">
    <div className="fh_possibility-image">
      <img src={stre} alt="possibility" />
    </div>
    <div className="fh_possibility-content">
      <h4> Fredhomes Housing Estate </h4>
      <h1 className="gradient_text">Be a part of our <br /> unbelievable reality</h1>
      <p>Fredhomes Housing Estate is under construction located at location Pyakasa Lugbe Abuja. F.C.T, Estate provides opportunity to own your next house in an area of value. Beautifully organized topography coupled with functional structures, Fredhomes estate gives a value higher than the price. </p>
      <h4> Fredhomes Ltd. Suite D.13 Rukayyat Plaza; 93, Obafemi Awolowo Way, Jabi District, Abuja <br />Fredhomes Ltd. Parakin Obalufe Layout, Ile-Ife. Osun-State.</h4>
    </div>
  </div>
);

export default Possibility;