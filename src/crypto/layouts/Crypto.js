
import { makeStyles } from "@material-ui/core";
import "../App.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Header from "../components/Header";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "../CryptoContext";
import CoinPage from "crypto/Pages/CoinPage";
const useStyles = makeStyles(() => ({
    Crypto: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));



const  Crypto=(path)=>{
    var pathname=path.location.pathname;
    var idarray=pathname.split('/');
    var id=idarray[idarray.length-1];
    console.log(id);
  const classes = useStyles();


  return (
    <CryptoContext>
    <BrowserRouter>
      <div className={classes.Crypto}>
       <Header />
       {pathname==="/cryptocurrency"?<HomePage/>
       :pathname===`/cryptocurrency/coins/${id}`?<CoinPage id={id}/>:
       <div>404</div>}
      </div>
    </BrowserRouter>
    </CryptoContext>
  );
}

export default Crypto;