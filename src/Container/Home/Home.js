import React, { useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
//hoc
import Aux from '../../Hoc/ContentWork';
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

  // const useStyles = makeStyles(theme => ({
  //   paper: {
  //     padding: 20,
  //     marginTop: 10,
  //     marginBottom: 10,
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   },
  // }));

  const useStyles = {
    paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center'
    }
  };

  var hour = new Date().getHours();
  const greeting = (hour < 12 ? "Buenos días, " : hour < 18 ? "Buenas tardes, " : "Buenas noches, ");

  return (
    <Aux>
      <Grid container spacing={0}>
        <Grid item sm={6}>
          <Paper style={useStyles.paper}>Hola</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper style={useStyles.paper}>{greeting}</Paper>
        </Grid>
      </Grid>
    </Aux>
  );

}

export default homePage;
