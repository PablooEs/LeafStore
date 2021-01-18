import React from 'react';
import Footer from './content/layout/footer';
import Nav from './content/layout/nav';
import Main from './content/main';

export default function App() {
  
  return (
    <React.Fragment>
        <Nav/>
        <Main/>
        <Footer/>
    </React.Fragment>
  );
}
