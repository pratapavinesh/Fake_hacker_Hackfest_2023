
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";

import AdminLayout from "admin/layouts/Admin/Admin.js";



 import CryptoHome from "crypto/Nhome.js";
 import CryptoCoin from "crypto/Ncoin.js";

import "./admin/assets/scss/black-dashboard-react.scss";
import "./admin/assets/demo/demo.css";
import "./admin/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./admin/components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./admin/components/BackgroundColorWrapper/BackgroundColorWrapper";


import { StockOverviewPage } from "./stock/pages/StockOverviewPage"
import { StockDetailPage } from "./stock/pages/StockDetailPage"
import { WatchListContextProvider } from "./stock/context/watchListContext"


const root = ReactDOM.createRoot(document.getElementById("root"));






root.render(
  <BrowserRouter>
          <WatchListContextProvider>
          <Route path="/stock" render={()=><StockOverviewPage />} />
          <Route path="/detail/:symbol" render={()=><StockDetailPage />} />
          </WatchListContextProvider>

  <BackgroundColorWrapper>
      <ThemeContextWrapper>
          <Route path="/cryptocurrency/coins/:id" render={()=><CryptoCoin/>} exact />
          <Route path="/cryptocurrency" render={()=><CryptoHome/>} exact/>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          {/* <Redirect from="/" to="/admin/dashboard" /> */}
  </ThemeContextWrapper>
    </BackgroundColorWrapper>
      </BrowserRouter>
);
