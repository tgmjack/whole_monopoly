import React from "react";

interface Props {
  x: string;
  y: string;
  onclick: () => void;
  visible: string;
}

const dice = ({ x, y, onclick, visible }: Props) => {
  return (
    <button
      type="button"
      className="btn"
      onClick={onclick}
      style={{
        left: x,
        top: y,
        position: "absolute",
        backgroundColor: "#B2DADA",
        display: visible,
      }}
    >
      {" "}
      roll{" "}
    </button>
  );
};

export default dice;
