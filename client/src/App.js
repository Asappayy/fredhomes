import React, { useEffect }  from 'react'
import { BrowserRouter, Routes, Link, Route }  from 'react-router-dom'
import './App.css'
import { Footer, Blog, Possibility, Fredhomes, Features, Header} from './container'
import { Navbar, Brand, Cta, Form, Home} from './components'



// import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';

import { useDispatch } from 'react-redux';
import logo from './Assets/logo.png'
import { getPosts } from './actions/posts';





const App = () => {


  // skrr
  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);




  return (
   
      <BrowserRouter>
    <div>
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/form' element = {<Form />} />
    
      </Routes>
    </div>
    </BrowserRouter>
  ) 
}

export default App





    
     {/* <Home/>
    <Form/> */}
    


    //   {/* <Container maxWidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">Register</Typography>
    //     <img className={classes.image} src={logo} alt="icon" height="60" />
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid container justify="space-between" alignItems="stretch" spacing={3}>
    //         <Grid item xs={12} sm={7}> */}
    //           {/* <Posts setCurrentId={setCurrentId} /> */}
    //         {/* </Grid>
    //         <Grid item xs={12} sm={4}>
    //           <Form />
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container> */}