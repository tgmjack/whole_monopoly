import React from "react";

interface Props {
  x: string;
  y: string;
  width: string;
  height: string;
  roll_result: string;
  visible: string;
}

const Roll_pop_up = ({ x, y, width, height, roll_result, visible }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: "#a1c5ff",
        display: visible,
      }}
    >
      you rolled = {roll_result}
    </div>
  );
};

export default Roll_pop_up;
