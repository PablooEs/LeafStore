import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {plants} from '../data';
import {addItemCart} from '../redux/actions/cartActions';
import {useDispatch,useSelector} from 'react-redux';
import {Redirect,useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop:150,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



export default function itemDetail({match}) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  let logged = useSelector(state => state.login);
  const item = plants.find((element)=> element.id == match.params.id);
  return (
    <div className={classes.root}>
    <Container>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={item.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.desc}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button onClick={()=>{logged ? dispatch(addItemCart(item)) : history.push('/login')}}>Add to cart</Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{item.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
    </Container>
    </div>
  );
}