import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
const useStyles = makeStyles(() => ({
    Nhome: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function Nhome() {
  const classes = useStyles();

  return (
    <CryptoContext>
    <BrowserRouter>
      <div className={classes.Nhome}>
        <Header />
        <Homepage/>
      </div>
    </BrowserRouter>
    </CryptoContext>
  );
}

export default Nhome;
