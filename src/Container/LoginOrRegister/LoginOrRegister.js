import React, { useEffect, useState } from 'react';
import { Grid, Paper, makeStyles, Tab, Tabs, AppBar, Container } from '@material-ui/core';
//Styling
// import '../../Assets/css/site.css'
//Containers
import Register from './Register';
import Login from './Login';
//redux
// import { useDispatch } from 'react-redux';
//actions
// import dashBoardActions from '../../Actions/DashBoardAction';

const LoaginOrRegister = (props) => {

  // const dispatch = useDispatch();

  const [stateValue, setValue] = useState({
    value: 0
  });


  const useStyles = makeStyles(theme => ({
    mainRoot: {
      backgroundColor: theme.palette.background.paper
    },
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    tab: {
      width: '50%',
    }
  }));

  const classes = useStyles();

  function handleChange(event, newValue) {
    setValue({
      value: newValue
    });
  }

  return (
    <Container maxWidth="sm">
      <Grid container
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Grid item>
          <Paper>
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={stateValue.value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab className={classes.tab} label="Login" />
                  <Tab className={classes.tab} label="Register" />
                </Tabs>
              </AppBar>
            </div>
            <Login />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );

}

export default LoaginOrRegister;
