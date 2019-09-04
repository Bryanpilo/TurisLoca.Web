import React, { useState, useEffect } from "react";
import "./App.css";
import Route from "../../Router/Route";
import { withRouter } from "react-router-dom";
//Component
import Layout from "../Layout/Layout";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister";
//redux
import { useSelector } from "react-redux";
//actions

const App = props => {

  const login = useSelector(state => state.login);

  return (
    <div>
      {login.isLogin ?
        <Layout>
          <Route />
        </Layout>
        :
        <LoginOrRegister>
          <Route />
        </LoginOrRegister>
      }

    </div>
  );
};

export default withRouter(App);