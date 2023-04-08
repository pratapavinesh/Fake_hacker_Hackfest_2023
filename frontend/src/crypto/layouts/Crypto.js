
import { makeStyles } from "@material-ui/core";
import "../App.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CoinPage from "../Pages/CoinPage"; 
import Header from "../components/Header";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "../CryptoContext";
import { useParams } from "react-router-dom";
const useStyles = makeStyles(() => ({
    Crypto: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const  Crypto=(path)=>{
 const { id } = useParams();
  const classes = useStyles();
  console.log("pagal ho gya hu bro");
  console.log(path.location.pathname);
  console.log(`/cryptocurrency/coins/${id}`);
  console.log(useParams());

  return (
    <CryptoContext>
    <BrowserRouter>
      <div className={classes.Crypto}>
       <Header />
       { path.location.pathname==="/cryptocurrency"?
       <HomePage/>:<CoinPage/>}
      </div>
    </BrowserRouter>
    </CryptoContext>
  );
}

export default Crypto;