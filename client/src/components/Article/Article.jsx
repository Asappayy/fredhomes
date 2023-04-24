import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, text, tox }) => (
  <div className="fh_blog-container_article">
    <div className="fh_blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="fh_blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <p>{tox}</p>
      </div>
      <a href="#wgpt3"> <p>Contact Us</p> </a> 
    </div>
  </div>
);

export default Article;