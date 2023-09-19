import AliceCarousel from "react-alice-carousel";
import "./nav.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";

function Nav({ handleSearch, showSearchBox }) {
  const [soleil, setSoleil] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  const fetchCoin = async () => {
    const { data } = await axios.get(url);
    setSoleil(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const carouselItem = soleil.map((coin) => {
    return <img src={coin.image} alt={coin.id} />;
  });

  // console.log(soleil);
  return (
    <nav>
      {showSearchBox && (
        <input
          placeholder="search your fav coin"
          onChange={(e) => handleSearch(e)} // Pass a reference to the function
        />
      )}
      <h1>
        <Typewriter
          delaySpeed={1000}
          words={["Coin", "Search", "Coin Search"]}
          loop
          cursor={{ show: true, blink: true, element: "]" }}
          eraseSpeed={50}
          style={{ fontFamily: "Arial", fontSize: "24px", color: "blue" }}
          delayBetweenWords={1500}
        />
      </h1>
      {/* <div>
        <AliceCarousel
          items={carouselItem}
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
          className="alice"
          responsive={{
            0: {
              items: 2,
            },
            720: {
              items: 4,
            },
          }}
        />
      </div> */}
    </nav>
  );
}

export default Nav;
