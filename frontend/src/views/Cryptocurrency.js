import { makeStyles } from "@material-ui/core";
import Homepage from "../components/Pages/HomePage";
import "../css/CryptoCurrency.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "../components/Pages/CoinPage";
import Header from "../components/CryptoComponents/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function Cryptocurrency() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default Cryptocurrency;
