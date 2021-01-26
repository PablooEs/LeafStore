import React from 'react';
import Footer from './content/layout/footer';
import Nav from './content/layout/nav';
import Main from './content/main';
import Cart from './content/cart';
import ItemDetail from './content/itemDetail';
import Login from './content/login';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

export default function App() {
  
  return (
    <React.Fragment>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/cart" component={Cart}/>
          <Route path='/viewItem/:id' component={ItemDetail}/>
          <Route path="/login" component={Login}/>
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}
