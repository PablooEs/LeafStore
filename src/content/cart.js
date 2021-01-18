import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableContainer } from '@material-ui/core';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 3),
    marginTop: 17,
    minHeight:600,
  },
  tableContainer:{
    marginTop: 90,
  },
  table: {
    minWidth: 500,
    maxWidth: 650,
    margin: 'auto',
  },
}));


function cart() {
    const classes = useStyles();
    const listaElementos = useSelector(state => state.item);
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" 
            variant="h2" 
            align="center" 
            color="textPrimary" 
            gutterBottom>
                Cart Page
            </Typography>
            <TableContainer className={classes.tableContainer}>
            <Table className={classes.table} size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  {/* <TableCell align="right">Amount</TableCell> */}
                  <TableCell align="right">Individual Price</TableCell>
                  {/* <TableCell align="right">SubTotal Price</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {listaElementos.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.name}</TableCell> */}
              <TableCell align="right">{row.price}</TableCell>
              {/* <TableCell align="right">{row.price}</TableCell> */}
            </TableRow>
          ))}
          </TableBody>
        </Table>
        </TableContainer>
      </Container>
    </div>
    )
}

export default cart;
