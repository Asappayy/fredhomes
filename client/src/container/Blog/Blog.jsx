import React from 'react';
import Article from '../../components/Article/Article';
import { hh1, hh2, hh3, hh4, hh5 } from './imports';
import './Blog.css';

const Blog = () => (
  <div className="fh_blog section_padding" id="blog">
    <div className="fh_blog-heading">
      <h1 className="gradient_text"> Fredhomes Ltd Properties  <br /> For Sale & Rentals.</h1>
    </div>
    <div className="fh_blog-container">
      <div className="fh_blog-container_groupA">
        <Article imgUrl={hh1} date="Fredhomes Ltd." text="Five (5) Units Of Five (5) Terrace Duplex For Sale, Life Camp, Abuja F.C.T " tox = "Our Mission Is To Provide Business, Corporate Entities alongside Individuals With Standard & Deluxe Property At Feasible Prices. We Pride Ourselves On Core Values & Reputation. Fredhomes, located on the 3rd floor of Rukeyat Plaza, opposite Zenith Bank in Abuja, is a leading real estate company that is dedicated to delivering exceptional properties and services to clients. With a mission focused on providing high-quality properties at feasible prices, Fredhomes has earned a reputation for its commitment to excellence and core values. At Fredhomes, we understand the unique needs of our clients, whether they are businesses, corporate entities, or individuals looking for their dream property. We are committed to delivering outstanding service and personalized attention to ensure that our clients' real estate requirements are met with the utmost professionalism and integrity. One of our core values at Fredhomes is transparency. We believe in being open and honest in all our dealings with clients, ensuring that they are well-informed about every aspect of their property transactions. Our team of experienced real estate professionals is dedicated to providing accurate and up-to-date information, guiding our clients through the entire process, from property search to finalizing the deal. Another core value that sets Fredhomes apart is customer satisfaction. We strive to exceed our clients' expectations by offering them a wide range of standard and deluxe properties that are carefully selected to meet their specific needs and preferences. Our properties are located in prime locations, offering convenience, accessibility, and potential for future value appreciation. In addition to our commitment to transparency and customer satisfaction, Fredhomes places a high value on professionalism. Our team of real estate experts undergoes regular training and development programs to stay updated with the latest industry trends and best practices. This ensures that our clients receive the highest level of service and expertise in every transaction. Fredhomes also takes pride in its reputation as a trusted and reliable real estate company. We have built strong relationships with our clients and partners through our professionalism, integrity, and dedication to excellence. Our repeat clients and referrals are a testament to our commitment to providing exceptional service and building long-term relationships based on trust and mutual respect. As a socially responsible company, Fredhomes is also actively involved in giving back to the community. We support various charitable causes and initiatives that focus on improving the lives of the less fortunate and contributing to the development of our local communities. In conclusion, Fredhomes is a leading real estate company located in Abuja, with a mission to provide business, corporate entities, and individuals with standard and deluxe properties at feasible prices. We take pride in our core values of transparency, customer satisfaction, professionalism, and reputation. With our experienced team of real estate professionals, prime locations, and commitment to excellence, Fredhomes is your trusted partner for all your real estate needs. Contact us today and experience the Fredhomes difference!" />
      </div>
      <div className="fh_blog-container_groupB">
        <Article imgUrl={hh2} date="Fredhomes Ltd." text="Two (2) Units Of Two (2) Bedroom Bungalows For Let at Lugbe FHA " />
        <Article imgUrl={hh3} date="Fredhomes Ltd." text="Detached Bungalows For Sale at Asokoro no23" />
        <Article imgUrl={hh4} date="Fredhomes Ltd." text="Office Space for Rent At Wuse Zone2" />
        <Article imgUrl={hh5} date="Fredhomes Ltd." text="Four (4) units Of Three Bedroom Flats For Rent at Gwagalada Axis" />
      </div>
    </div>
  </div>
);

export default Blog;