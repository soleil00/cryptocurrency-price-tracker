import { useContext } from "react";
import CoinItem from "./CoinItem";
import "./coin.css";
import { PageContext } from "./Context";

function Coin({ coins, setShowSearchBox }) {
  const totalPages = Math.ceil(coins.length / 10);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  const handleClick = (value) => {
    setPage(value);
    // console.log("passed value", value);
  };

  const { page, setPage } = useContext(PageContext);
  // console.log("total pages", totalPages);
  // console.log(pagesArray);
  // console.log("page is :", page);
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

      {coins.slice(page * 10 - 10, page * 10).map((coin) => {
        return <CoinItem key={coin.id} coin={coin} />;
      })}

      <div className="pagination">
        {pagesArray.map((p) => {
          return (
            <button
              className={page === p ? "active" : ""}
              key={p}
              onClick={() => handleClick(p)}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Coin;
