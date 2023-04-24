import React from 'react';
import './Feature.css';

const Feature = ({ title, text, tex, te}) => (
  <div className="fh_features-container_feature">
    <div className="fh_features-container_feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="fh_features-container_feature-text">
      <p>{text}</p>
      <p>{tex}</p>
      <p>{te}</p>
    </div>
  </div>
);

export default Feature;