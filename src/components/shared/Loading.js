import React from "react";

//Asset
import spinner from "../../asset/spinner.gif";

//Style
import Styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={Styles.container}>
      <img src={spinner} alt="Loading" style={{ width: "80px" }} />
      <h1>Loading ...</h1>
    </div>
  );
};

export default Loading;
