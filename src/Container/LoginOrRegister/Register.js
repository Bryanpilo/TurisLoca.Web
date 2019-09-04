import React, { useEffect } from 'react';
import { Grid, Paper, makeStyles, TextField } from '@material-ui/core';
//hoc
import Aux from '../../Hoc/ContentWork';
//Styling
// import '../../Assets/css/site.css'
//Containers
//redux
// import { useDispatch } from 'react-redux';
//actions
// import dashBoardActions from '../../Actions/DashBoardAction';

const Register = (props) => {

  // const dispatch = useDispatch();

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    menu: {
      width: 200,
    },
  }));

  const classes = useStyles();

  return (
    <Aux>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
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
        {/* <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        /> */}
        <TextField
          id="standard-number"
          label="Number"
          // value={values.age}
          // onChange={handleChange('age')}
          type="number"
          className={classes.textField}
          // InputLabelProps={{
          //   shrink: true,
          // }}
          margin="normal"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
      </form>
    </Aux>
  );

}

export default Register;
