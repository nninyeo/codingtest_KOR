/* eslint-disable */

import React from "react";
//import { Redirect } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Redirect
  //Switch,
} from "react-router-dom";

import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
// import ReactGA from "react-ga";

const Routes = () => {

  return (
    <Router>
       <Route exact path="/">
          <Redirect to="/home"/>
       </Route>
        <Route path="/home" component={Home} />
        <Route path="/beerList" component={BeerList} />
    </Router>
  );
};

export default Routes;