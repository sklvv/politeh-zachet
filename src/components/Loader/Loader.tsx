import React from "react";
import { TailSpin } from "react-loader-spinner";
import { styles } from "./styles";
const Loader = () => {
  return (
    <div
      style={{
        position: "relative",

        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TailSpin color="rgb(25,118,210)" />
    </div>
  );
};

export default Loader;
