import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {plants} from '../data';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    maxWidth: '250px',
    maxHeight: '250px',
    objectFit: 'contain',
  },
  cardContent: {
    flexGrow: 1,
  },
  margin:{
    margin: 10,
    flexGrow:1,
  }
}));




export default function Main(){
    const classes = useStyles();
    return(
        <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Store
            </Typography>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {plants.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia component="img"
                    className={classes.cardMedia}
                    image={card.img}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                    </Typography>
                    <Typography color="secondary" variant="overline" display="block" gutterBottom>
                        price: {card.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <Button component={Link} to ={`/viewItem/${card.id}`}
                      className={classes.margin} variant="outlined" size="medium" color="primary" >
                        View
                      </Button>  
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    );
}
