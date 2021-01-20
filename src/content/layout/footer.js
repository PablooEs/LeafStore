import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop:100,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(){
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Designed by Pablo Escobar
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Follow me on instagram!
        </Typography>
        <Copyright />
      </footer>
    );
}
      
