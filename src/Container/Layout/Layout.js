import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
// import "@babel/polyfill";
//Services
//Components
//hoc
import Aux from '../../Hoc/ContentWork';
//Styling
import './Layout.css';



const Layout = (props) => {

  return (
    <Aux>
      <main>
        {props.children}
      </main>
    </Aux>
  )
}


export default withRouter(Layout)
