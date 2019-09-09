import React, { useEffect, useState } from 'react';
import { Tabs, Tab, AppBar, CssBaseline, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Containers
import Register from './Register';
import Login from './Login';
//redux
// import { useDispatch } from 'react-redux';
//actions
// import dashBoardActions from '../../Actions/DashBoardAction';

const LoaginOrRegister = (props) => {

  // const dispatch = useDispatch();

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
      </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    tab: {
      maxWidth: '50vh', // Fix IE 11 issue.
      width: '50%',
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const [stateValue, setValue] = useState({
    value: 0
  });

  function handleChange(event, newValue) {
    setValue({
      value: newValue
    });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
        {stateValue.value === 0 ?
          <Login
            handleChange={handleChange}
          />
          :
          <Register
            handleChange={handleChange}
          />
        }
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );

}

export default LoaginOrRegister;
