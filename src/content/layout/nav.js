import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {makeStyles} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function Nav(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="fixed">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Leaf-Store
          </Typography>
          <IconButton aria-haspopup="true" color="inherit">
            <Badge color="error" badgeContent={0}>
            <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
            <AccountCircle/>
        </IconButton>
        </Toolbar>
        </AppBar>
        </div>
    );
}
