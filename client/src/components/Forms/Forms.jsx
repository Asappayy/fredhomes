import React, {useState} from 'react'
import { TextField, Button, Typography, AppBar, Paper } from '@mui/material';
import { useDispatch} from 'react-redux';


import logo from '../../Assets/logo.png';
import useStyles from '../../styles';
import { createPost } from '../../actions/posts';
import { Link } from 'react-router-dom';

const  Forms = () => {
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
        
<h1>ggggggggggggggggggggg</h1>

      <Paper className={classes.paper}>
    
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Register For Fredhomes Conference 2.0</Typography>
        <TextField name="FirstName" variant="outlined" label="First Name" fullWidth value={postData.FirstName} onChange={(e) => setPostData({ ...postData, FirstName: e.target.value })} />
        <TextField name="LastName" variant="outlined" label="Last Name" fullWidth value={postData.LastName} onChange={(e) => setPostData({ ...postData, LastName: e.target.value })} />
        <TextField name="Email" variant="outlined" label="E-mail" fullWidth value={postData.Email} onChange={(e) => setPostData({ ...postData, Email: e.target.value })} />
        <TextField name="Sex" variant="outlined" label="Sex" fullWidth value={postData.Sex} onChange={(e) => setPostData({ ...postData, Sex: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
      </Paper>
      </div>
  );
    
  };
 

export default Forms

