import React, { useState} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {loginSession} from '../redux/actions/loginActions';
import {loginInfo} from './../data';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    margin: 'auto',
    minHeight:600,
  },
  paper:{
    display:'block',
    margin: 'auto',
    marginTop: 150,
    maxWidth:400,
    minHeight:300,
    padding:50,
  },
  button:{
      display:'block',
      marginTop: 50,
      margin:'auto',
  }
}));

function validateSession(user,pass){
    if(user === loginInfo[0].username && pass === loginInfo[0].password){
        return true;
    }
}

function login() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <form  noValidate autoComplete="off">
                    <TextField id="username" label="Username" fullWidth value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <TextField id="password" label="Password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/> 
                        <Button className={classes.button} 
                        color="secondary" 
                        variant="contained"
                        onClick={()=>{ validateSession(username,password) ? dispatch(loginSession()) && history.push('/') : console.log("Invalid username or password");}}
                        >Login
                        </Button> 
                </form>
            </Paper>    
        </Container>
    )
}

export default login
