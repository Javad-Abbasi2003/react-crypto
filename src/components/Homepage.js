import React, { useState, useEffect } from "react";

//Api
import { getCoins } from "../services/api";

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
    <>
      {coins.length ? (
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={changeHandler}
          />
          {searchedCoins.map((coin) => (
            <CoinLine key={coin.id} data={coin} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Homepage;
