import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, MenuIcon} from '@material-ui/core';
// import "@babel/polyfill";
//Services
//Components
//hoc
import Aux from '../../Hoc/ContentWork';
//Styling
// import './Layout.css';



const Header = (props) => {

  return (
    <AppBar position="static">
    <Toolbar>
      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6">
        Header
      </Typography>
      {/* <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
  )
}


export default withRouter(Header)
