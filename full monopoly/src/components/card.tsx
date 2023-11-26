import React from "react";

interface Props {
  x: string;
  y: string;
  width: string;
  height: string;
  headline: string;
  body_text: string;
  image_url: string;
  visible: string;
  closeclick: () => void;
}

const card = ({
  x,
  y,
  width,
  height,
  headline,
  body_text,
  image_url,
  visible,
  closeclick,
}: Props) => {
  return (
    <div
      className="card"
      style={{
        left: x,
        top: y,
        width: width,
        height: height,
        display: visible,
      }}
    >
      <img src={image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{headline}</h5>
        <p className="card-text">{body_text}</p>

        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeclick}
        ></button>
      </div>
    </div>
  );
};

export default card;
