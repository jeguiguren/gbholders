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

import LandingPage from "views/pages/LandingPage.js";
import ProductPage from "views/pages/ProductPage.js";
import InformesPage from "views/pages/InformesPage.js";
import NewsPage from "views/pages/NewsPage.js";
import AboutPage from "views/pages/AboutPage.js";

import LoginPage from "views/pages/LoginPage.js";

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <Switch>
        <Route path="/index" render={props => <LandingPage {...props} basename={process.env.PUBLIC_URL}/>} />
        
        <Route path="/landing-page" render={props => <LandingPage {...props} />}/>
        <Route path="/informes-page" render={props => <InformesPage {...props} />} />
        <Route path="/product-page" render={props => <ProductPage {...props} />} />
        <Route path="/news-page" render={props => <NewsPage {...props} />} />
        <Route path="/about-page" render={props => <AboutPage {...props} />} />
        
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
