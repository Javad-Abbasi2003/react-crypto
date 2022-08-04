import React, { useState, useEffect } from "react";

//Api
import { getCoins } from "../services/api";

//Component
import CoinLine from "./shared/CoinLine";
import Loading from "./shared/Loading";

const Homepage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setCoins(await getCoins());
      return;
    };
    fetchData();
  }, []);

  const changeHandler = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      {coins.length ? (
        <div>
          <input type="text" placeholder="Search" value={search} onChange={changeHandler} />
          {coins.map((coin) => (
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
