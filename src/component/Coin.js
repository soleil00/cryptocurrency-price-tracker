import CoinItem from "./CoinItem";
import "./coin.css";

function Coin({ coins, setShowSearchBox }) {
  setShowSearchBox(true);
  return (
    <div className="coins">
      <div className="heading">
        <h3>#</h3>
        <h3>Coin</h3>
        <h3>Price</h3>
        <h3>24H</h3>
        <h3 className="hide-mobile">Volume</h3>
        <h3 className="hide-mobile">Market cap</h3>
      </div>

      {coins.map((coin) => {
        return <CoinItem key={coin.id} coin={coin} />;
      })}
    </div>
  );
}

export default Coin;
