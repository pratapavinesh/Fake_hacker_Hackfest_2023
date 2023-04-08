import { makeStyles } from "@material-ui/core";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CoinPage from "./Pages/CoinPage"; 
import Header from "./components/Header";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
const useStyles = makeStyles(() => ({
    Ncoin: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function Ncoin() {
  const classes = useStyles();

  return (
    <CryptoContext>
    <BrowserRouter>
      <div className={classes.Ncoin}>
       <Header />
        <CoinPage/>
      </div>
    </BrowserRouter>
    </CryptoContext>
  );
}

export default Ncoin;
