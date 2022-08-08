import React from "react";
import { Link } from "react-router-dom"

//Style
import Styles from "./CoinLine.module.css";

const CoinLine = (props) => {
  const {
    id,
    name,
    image,
    market_cap,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = props.data;
  const change = price_change_percentage_24h;

  return (
    <div
      className={
        change > 0
          ? Styles.greenContainer
          : change < 0
          ? Styles.redContainer
          : Styles.grayContainer
      }
    >
      <Link to={`/${id}`}>
        <img src={image} alt={name} className={Styles.image} />
      </Link>
      <Link to={`/${id}`} className={Styles.nameSpan}>
        <span>{name}</span>
      </Link>
      <span className={Styles.symbolSpan}>{symbol.toUpperCase()}</span>
      <span className={Styles.currentPriceSpan}>
        $ {current_price.toLocaleString()}
      </span>
      <span
        className={
          change > 0
            ? Styles.greenChangeSpan
            : change < 0
            ? Styles.redChangeSpan
            : Styles.grayChangeSpan
        }
      >
        {price_change_percentage_24h.toFixed(2)} %
      </span>
      <span className={Styles.marketCapSpan}>
        $ {market_cap.toLocaleString()}
      </span>
    </div>
  );
};

export default CoinLine;
