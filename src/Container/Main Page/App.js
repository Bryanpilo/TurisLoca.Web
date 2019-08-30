import React, { useState, useEffect } from "react";
import "./App.css";
import Route from "../../Router/Route";
import { withRouter } from "react-router-dom";
//Component
import Layout from "../Layout/Layout";
//redux
import { useSelector } from "react-redux";
//actions

const App = props => {

  // const isloading = useSelector(state => state.loading);

  return (
    <div>
      <Layout>
        <Route />
      </Layout>
    </div>
  );
};

export default withRouter(App);