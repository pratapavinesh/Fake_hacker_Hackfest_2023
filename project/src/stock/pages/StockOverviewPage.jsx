import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
// import trading from "../images/Trading.png"
export const StockOverviewPage = () => {
  return <div>
    <div className="text-center">
      <h1 style={{padding:"100px",fontSize:'100px'}}>Fake Hackers</h1>
    </div>
    <AutoComplete />
    <StockList />
  </div>
}