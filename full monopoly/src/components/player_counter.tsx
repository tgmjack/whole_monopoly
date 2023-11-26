import React, { useEffect } from "react";

interface Props {
  size: string;
}

const player_counter = ({ size }: Props) => {
  return (
    <div
      style={{
        zIndex: 2,
        borderRadius: "50%",
        backgroundColor: "#f00",
        width: size,
        height: size,
      }}
    ></div>
  );
};

export default player_counter;
