import React from "react";

interface Props {
  heading: string;
  extra_text: string;
  theimage_path: string;
  thisindex: string;
  hexcolour: string;
  svgs: string[];
}

const board_tile = ({
  heading,
  extra_text,
  theimage_path,
  thisindex,
  hexcolour,
  svgs,
}: Props) => {
  return (
    <div className="card" style={{ height: "40vh", zIndex: -1 }}>
      <div
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: hexcolour,
        }}
        className="card-img-top"
      >
        {svgs.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="32"
            fill="currentColor"
            className="bi bi-lightbulb"
            viewBox="0 0 16 16"
          >
            {svgs.map((svg, svg_index) => (
              <path d={svg} />
            ))}
          </svg>
        )}
      </div>
      <div className="card-body" style={{ padding: 0, textAlign: "center" }}>
        <h5 className="card-title">{heading}</h5>
        <p
          className="card-text"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          {extra_text}
        </p>
      </div>
    </div>
  );
};

export default board_tile;
