/* This will hold the react-router pages and NavBar component*/
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Home from "./components/Home"
import ProductsInStore from './components/ProductsInStore';
import StoreInfo from './components/StoreInfo';
/*imported components for NavBar and all routes, imported Route and Switch; 
BrowserRouter is on index.js page */

function App() {
  return (
    
      <div className="App">
      <NavBar className="navbar-style"/>   
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/storeinfo" component={StoreInfo}/> 
        <Route path="/productsinstore" component={ProductsInStore}/>     
      </Switch>
     
    </div>
  )
}

export default App;