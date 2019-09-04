import React, { useEffect } from 'react';
import { Grid, Paper, makeStyles, TextField, Button } from '@material-ui/core';
//hoc
import Aux from '../../Hoc/ContentWork';
//Styling
// import '../../Assets/css/site.css'
//Containers
//redux
// import { useDispatch } from 'react-redux';
//actions
// import dashBoardActions from '../../Actions/DashBoardAction';

const LoaginOrRegister = (props) => {

  // const dispatch = useDispatch();

  const useStyles = makeStyles(theme => ({
    MainContainer: {
      height: '100%'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%'
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <Aux>
      <Grid item
        sm={12}
        className={classes.MainContainer}
      >
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-search"
            label="User name"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <Button variant="contained" color="primary" className={classes.button}>
            Primary
      </Button>
        </form>
      </Grid>
    </Aux>
  );

}

export default LoaginOrRegister;
