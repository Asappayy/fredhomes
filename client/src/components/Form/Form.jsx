import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
// import FileBase from 'react-file-base64';
import logo from '../../Assets/logo.png';
import confr from '../../Assets/confr.jpg';
import useStyles from '../../styles';
import { createPost } from '../../actions/posts';
import Navbar from '../Navbar/Navbar';
import './Form.css'
import { Footer } from '../../container';
import { Blog } from '../../container';



const Form = () => {
  const posts = useSelector((state)=> state.posts)
  console.log(posts)
  const [postData, setPostData] = useState({ FirstName: '', LastName: '', Email: '', Sex: '' });
  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    dispatch(createPost(postData));
  }
    const clear = () => {
      
    };

    
    return (
      <div>
            <Navbar />
        <div>
        <div>

            <Paper className={classes.paper}>



         <div className='formm section_padding fhhh' >
       
       
         <div className='fom'>
         <div class="form-section">
  <div class="form-wrapper">
    <form autocomplete="off" novalidate class="form">
      <h2>Register For Fredhomes Conference 2.0</h2>
      <br />
      <div class="form-group">
        <label for="FirstName">First Name:</label>
        <input type="text" id="FirstName" name="FirstName" value={postData.FirstName} onChange={(e) => setPostData({ ...postData, FirstName: e.target.value })} required />
      </div>
      <div class="form-group">
        <label for="LastName">Last Name:</label>
        <input type="text" id="LastName" name="LastName" value={postData.LastName} onChange={(e) => setPostData({ ...postData, LastName: e.target.value })} required />
      </div>
      <div class="form-group">
        <label for="Email">E-mail:</label>
        <input type="email" id="Email" name="Email" value={postData.Email} onChange={(e) => setPostData({ ...postData, Email: e.target.value })} required />
      </div>
      <div class="form-group">
        <label for="Sex">Sex:</label>
        <select id="Sex" name="Sex" value={postData.Sex} onChange={(e) => setPostData({ ...postData, Sex: e.target.value })}>
          <option value="">Select Your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Rather Not Say">Rather Not Say</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  <div class="image-wrapper">
    <img src={confr} alt="conference image" />
  </div>
</div>

         </div>
    

              </div>
            </Paper>
        </div>
        </div>
        <Blog/>
        <Footer />
      </div>
  );
    
  };

  

export default Form;

