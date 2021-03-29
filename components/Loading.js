import React from "react";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://image.flaticon.com/icons/png/512/124/124034.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle />
      </div>
    </center>
  );
}

export default Loading;
