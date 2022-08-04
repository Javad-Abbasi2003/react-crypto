import React from "react";

//Asset
import spinner from "../../asset/spinner.gif";

const Loading = () => {
  return (
    <div>
      <img src={spinner} alt="Loading" style={{width: "80px"}} />
      <h1>Loading ...</h1>
    </div>
  );
};

export default Loading;
