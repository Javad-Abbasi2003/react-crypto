import React from "react";

const CoinLine = (props) => {
  const { name, image, market_cap, symbol, current_price } = props.data;
  return (
    <div>
      <img src={image} alt={name} />
      <p>{symbol}</p>
      <p>{current_price}</p>
      <p>{market_cap}</p>
    </div>
  );
};

export default CoinLine;
