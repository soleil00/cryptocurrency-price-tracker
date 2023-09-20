import React from "react";
import { Link } from "react-router-dom";

function CoinItem({ coin }) {
  const change = coin.price_change_percentage_24h;
  const sign = change > 0 ? "+" : "";

  // console.log(coin.name);
  return (
    <Link
      to={`/coin/${coin.id}`}
      className={`coin ${change > 0 ? "blue" : "red"}`}
    >
      <div>{coin.market_cap_rank}</div>
      <div className="symbol">
        <img src={coin.image} alt={`${coin.symbol} logo`} />
        <span>{coin.symbol}</span>
      </div>
      <div>${coin.current_price.toLocaleString()}</div>
      <div className={change > 0 ? "blue" : "red"}>
        {sign}
        {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className="hide-mobile">
        ${coin.total_volume.toLocaleString().slice()}0, -6M
      </div>
      <div className="hide-mobile">
        ${coin.market_cap.toLocaleString().slice(0, -6)}M
      </div>
    </Link>
  );
}

export default CoinItem;
