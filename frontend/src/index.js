/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";

import AdminLayout from "admin/layouts/Admin/Admin.js";
import RTLLayout from "admin/layouts/RTL/RTL.js";


import CryptoLayouts from "crypto/layouts/Crypto.js";

import "./admin/assets/scss/black-dashboard-react.scss";
import "./admin/assets/demo/demo.css";
import "./admin/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./admin/components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./admin/components/BackgroundColorWrapper/BackgroundColorWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/cryptocurrency" render={(props) => <CryptoLayouts {...props} />}/>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
