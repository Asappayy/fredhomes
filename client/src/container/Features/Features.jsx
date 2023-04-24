import React from 'react';
import Feature from '../../components/Feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Buying for speculative purpose? ',
    text: "Fredhomes is the platform to stand, We find the best property to exchange your capital in terms of value and facilitate the liquiduty of same when it's long enough",
  },
  {
    title: 'Buying for occupational purpose',
    text: "Some proprty's propietary occupation is to serve as your residential home for a short or long term. Fredhomes takes the painstaken place of finding values for you in the market in forms of your dream house",
  },
  {
    title: 'Freehold intrests',
    text: 'Feedhomes buy you the value in the property you want to freehold, we also make it possible tp transfer your freehold interests as outright sale, mortgage or as leasehold interest',
  },
  {
    title: 'Leasehold interest',
    text: 'Looking to buy time from a freeholder as leasehold? Fredhomes is your dependable indispensible pal. we exchange your money for durable duration in a a value earned property',
  },
];

const Features = () => (
  <div className="fh_features section_padding" id="features">
    <div className="fh_features-heading">
      <h1 className="gradient_text"> Fredhomes is foremost in the buisness of amounting values within & between your capital & real estate .</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="fh_features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;