import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import { TableContainer } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { removeItemCart } from "../redux/actions/cartActions";
import cartImage from "./images/shopping-cart.png";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 3),
    marginTop: 17,
    minHeight: 600,
  },
  tableContainer: {
    marginTop: 90,
  },
  table: {
    minWidth: 500,
    maxWidth: 650,
    margin: "auto",
  },
  imgContainer: {
    marginTop: 50,
  },
  img: {
    display: "block",
    margin: "auto",
    maxWidth: 400,
  },
}));

function cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let productos = useSelector((state) => state.products.productos);
  let total = 0;
  if (undefined !== productos && productos.length) {
    productos.map((producto) => {
      total += producto.price * producto.counter;
    });
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Cart Page
          </Typography>
          <TableContainer className={classes.tableContainer}>
            <Table
              className={classes.table}
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Individual Price</TableCell>
                  <TableCell align="right">Sub Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.counter}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      {row.price * row.counter}
                    </TableCell>
                    <TableCell align="right">
                      <Button onClick={() => dispatch(removeItemCart(row.id))}>
                        <DeleteIcon color="error" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="left">
                    <Box fontWeight="fontWeightBold" fontSize={15}>
                      TOTAL
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Box fontWeight="fontWeightBold" fontSize={15}>
                      {total.toFixed(2)}
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Your cart is empty!
          </Typography>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={cartImage} alt="cart" />
          </div>
        </Container>
      </div>
    );
  }
}

export default cart;
