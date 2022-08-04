import React from "react";

const CoinLine = (props) => {
  const { name, image, market_cap, symbol, current_price, price_change_percentage_24h } = props.data;
  return (
    <div>
      {/* <img src={image} alt={name} /> */}
      <p>{name}</p>
      {/* <p>{price_change_percentage_24h}</p> */}
      <p>{current_price} $</p>
      {/* <p>{market_cap}</p> */}
    </div>
  );
};

export default CoinLine;
