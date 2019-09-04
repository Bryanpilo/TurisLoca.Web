import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import {Paper, Tabs, Tab} from '@material-ui/core';
// import "@babel/polyfill";
//Services
//Components
//hoc
import Aux from '../../Hoc/ContentWork';
//Styling
// import './Layout.css';



const Footer = (props) => {

  return (
    <Paper>
      <Tabs
        value={0}
        // onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  )
}


export default withRouter(Footer)
