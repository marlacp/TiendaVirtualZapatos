import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import Product from './Product/Product';
import '../assets/styles/App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect exact from="/" to='/1'/>
        <Route exact path='/' component={Product} />
        <Route exact path='/:identificador' component={Product} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;