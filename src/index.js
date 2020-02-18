/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import AboutPage from "views/examples/AboutPage.js";
import ProductPage from "views/examples/ProductPage.js";

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <Switch>
        <Route 
          path="/index" 
          render={props => <LandingPage {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/about-page" render={props => <AboutPage {...props} />} />
        <Route path="/product-page" render={props => <ProductPage {...props} />} />
        
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
