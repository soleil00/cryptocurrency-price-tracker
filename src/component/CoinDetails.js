import React from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import "./coinDetail.css";

function CoinDetails({ coins, setShowSearchBox }) {
  setShowSearchBox(false);
  const { id } = useParams();
  console.log(coins);
  console.log("this is selected id " + id);

  const match = coins.find((coin) => coin.id === id);

  if (!match) {
    return <div>No coin found with ID: {id}</div>;
  }

  return (
    <div className="coins-details">
      <Detail coin={match} />
    </div>
  );
}

export default CoinDetails;
