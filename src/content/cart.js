import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    marginTop: 17,
    minHeight:600,
  },
}));

function cart() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" 
            variant="h2" 
            align="center" 
            color="textPrimary" 
            gutterBottom>
                Cart Page
            </Typography>
          </Container>
        </div>
    )
}

export default cart;
