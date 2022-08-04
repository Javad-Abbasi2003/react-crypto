import React, { useState, useEffect } from "react";

//Api
import { getCoins } from "../services/api";

//Style
import Styles from "./Homepage.module.css";

//Component
import CoinLine from "./shared/CoinLine";
import Loading from "./shared/Loading";

const Homepage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedCoins, setSearchedCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCoins(await getCoins());
      return;
    };
    fetchData();
  }, []);
  useEffect(() => {
    setSearchedCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [coins, search]);

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={Styles.container}>
      {coins.length ? (
        <>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={changeHandler}
            className={Styles.search}
          />
          <div className={Styles.coinsContainer}>
            {searchedCoins.map((coin) => (
              <CoinLine key={coin.id} data={coin} />
            ))}
            {!searchedCoins.length && <h1>No crypto found</h1>}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Homepage;
