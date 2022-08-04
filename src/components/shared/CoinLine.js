import React from "react";

const CoinLine = (props) => {
  const { name, image, market_cap, symbol, current_price, price_change_percentage_24h } = props.data;
  return (
    <div>
      {/* <img src={image} alt={name} /> */}
      <span>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>{current_price.toLocaleString()} $</span>
      {/* <span>{price_change_percentage_24h}</span>
      <span>{market_cap.toLocaleString()}</span> */}
    </div>
  );
};

export default CoinLine;
