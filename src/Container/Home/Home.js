import React, { useEffect } from 'react';
// import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
//hoc
import Aux from '../../Hoc/ContentWork';
//Context
// import AuthContext from '../../Context/Auth-Context'
//Styling
// import '../../Assets/css/site.css'
import './Home.css'
//Containers
//redux
// import { useDispatch } from 'react-redux';
//actions
// import dashBoardActions from '../../Actions/DashBoardAction';

const homePage = (props) => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(dashBoardActions.setAllValues());
  // }, []);

  var hour = new Date().getHours();
  const greeting = (hour < 12 ? "Buenos días, " : hour < 18 ? "Buenas tardes, " : "Buenas noches, ");

  return (
    <Aux>
      <h1>My first app</h1>
      <h2>{greeting}</h2>
    </Aux>
  );

}

export default homePage;
