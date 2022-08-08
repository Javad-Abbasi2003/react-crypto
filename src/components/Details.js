import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

//Functions
import { getCoin } from "../services/api";

//Component
import Loading from "./shared/Loading";

//Style
import styles from "./Details.module.css"

//Asset
import leftArrow from "../asset/to-left.svg"

const Details = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [priceChange24, setPriceChange24] = useState(0)
  
  useEffect(() => {
    const fetchData = async () => {
      setCoin(await getCoin(params.coin));
      return;
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if(Object.keys(coin).length) {
      setPriceChange24(coin.market_data.price_change_percentage_24h)
    }
  }, [coin]);
  
  return (
    <div className={styles.container}>
      {Object.keys(coin).length ? (
        <>
          <Link to="/" className={styles.link}><img src={leftArrow} alt="<" />Cryptos</Link>
          <div className={styles.notLink}>
            <img src={coin.image.large} alt={coin.name} className={styles.image}/>
            <div className={styles.detailsContainer}>
              <span className={styles.rank}>Rank # {coin.market_cap_rank}</span>
              <h2 className={styles.name}>{coin.name} ({coin.symbol.toUpperCase()})</h2>
              <h1 className={styles.currentPrice}>${coin.market_data.current_price.usd.toLocaleString()} <span className={priceChange24 > 0 ? styles.greenPriceChange24 : styles.redPriceChange24}>{priceChange24.toFixed(2)}%</span></h1>
              <p className={styles.marketCap}>MarketCap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
              <p className={styles.highest}>24h high: ${coin.market_data.high_24h.usd.toLocaleString()}</p>
              <p className={styles.lowest}>24h low: ${coin.market_data.low_24h.usd.toLocaleString()}</p>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
