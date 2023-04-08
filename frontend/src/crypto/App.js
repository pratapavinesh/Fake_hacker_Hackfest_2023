import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import CryptoContext from "./CryptoContext";
import "./index.css";
import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter, Route } from "react-router-dom";
const useStyles = makeStyles(() => ({
  Crypto: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <CryptoContext>
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
    </CryptoContext>
  );
}

export default App;
