import React from "react";

//Style
import Styles from "./CoinLine.module.css";

const CoinLine = (props) => {
  const {
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
      <img src={image} alt={name} className={Styles.image} />
      <span className={Styles.nameSpan}>{name}</span>
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
