import React from "react";
import ChartComp from "./ChartComp";

function Detail({ coin, selectedId }) {
  const {
    symbol,
    market_cap_rank,
    image,
    current_price,
    low_24h,
    high_24h,
    market_cap,
    circulating_supply,
    name,
    id,
    last_updated,
    price_change_24h,
    price_change_percentage_24h,
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
  } = coin;

  return (
    <div className="coin-details">
      <h1>{name}</h1>
      <div className="coin-price-conatiner">
        <div className="ranks">Ranks #{market_cap_rank}</div>
        <div className="soleil">
          <div className="details">
            <img src={image} alt="image" />
            <p>{symbol}</p>
            <p>({name}/usd)</p>
          </div>
          <div className="coin-price">
            <h2>${current_price}</h2>
          </div>
        </div>
      </div>
      <div className="ss">
        <ChartComp selectedId={selectedId} />
      </div>
      <div className="makert">
        <div className="ath">
          <div className="dd">
            <p>24 Hours Low</p>
            <p className="pp">${low_24h}</p>
          </div>
          <div className="dd">
            <p>24 Hours High</p>
            <p className="pp">${high_24h}</p>
          </div>
        </div>
        <div className="makert-cap">
          <div className="dd">
            <p>Market Cap</p>
            <p>${market_cap}</p>
          </div>
          <div className="dd">
            <p>Circulating Supply</p>
            <p className="pp">${circulating_supply}</p>
          </div>
        </div>
      </div>

      <div className="about">
        <h2>about</h2>
        <p>
          {name} ({id}) is a cryptocurrency ranked {market_cap_rank} in market
          capitalization. As of {last_updated}, it is priced at approximately{" "}
          {current_price} USD. In the last 24 hours, it changed by{" "}
          {price_change_24h} USD, representing a {price_change_percentage_24h}%
          change.
        </p>

        <p style={{ marginTop: "20px" }}>
          {name}'s all-time high (ATH) was {ath} USD on {ath_date}, with a{" "}
          {ath_change_percentage}% decrease since then. Its all-time low (ATL)
          was {atl} USD on {atl_date}, with a remarkable {atl_change_percentage}
          % increase from ATL.
        </p>

        <p style={{ marginTop: "20px" }}>
          The circulating supply is approximately {circulating_supply} ETH, and
          there is no maximum supply. The current market cap stands at{" "}
          {market_cap} USD. In the past 24 hours, it ranged from a high of{" "}
          {high_24h} USD to a low of {low_24h} USD. Remember, cryptocurrency
          prices are highly volatile, so consider your investment goals
          carefully.
        </p>
      </div>
    </div>
  );
}

export default Detail;
