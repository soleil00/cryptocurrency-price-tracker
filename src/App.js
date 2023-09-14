import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./component/Coin";
import Nav from "./component/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinDetails from "./component/CoinDetails";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";
  const [coins, setCoins] = useState([]);
  const [originalCoins, setOriginalCoins] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        setOriginalCoins(response.data); // Store a copy of the original data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch(e) {
    const searchInputs = e.target.value.toLowerCase();

    if (searchInputs === "") {
      // Reset to the original coins data when the search input is empty
      setCoins(originalCoins);
    } else {
      const filteredSearch = originalCoins.filter(
        (coin) =>
          coin.id.toLowerCase().includes(searchInputs) ||
          coin.symbol.toLowerCase().includes(searchInputs)
      );

      setCoins(filteredSearch);
    }
  }

  return (
    <div className="App">
      <Nav
        handleSearch={handleSearch}
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Coin coins={coins} setShowSearchBox={setShowSearchBox} />}
          />
          <Route
            path="/coin/:id"
            element={
              <CoinDetails coins={coins} setShowSearchBox={setShowSearchBox} />
            }
          />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
