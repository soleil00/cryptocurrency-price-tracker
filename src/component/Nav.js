import "./nav.css";

function Nav({ handleSearch, showSearchBox }) {
  return (
    <nav>
      {showSearchBox && (
        <input
          placeholder="search your fav coin"
          onChange={(e) => handleSearch(e)} // Pass a reference to the function
        />
      )}
      <h1>Coin Search</h1>
    </nav>
  );
}

export default Nav;
