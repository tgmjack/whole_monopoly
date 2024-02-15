import React from "react";

interface Props {
  player1_properties_names: string[];
  player2_properties_names: string[];
  player1_properties_colours: string[];
  player2_properties_colours: string[];
}

const OwnedProperties = ({
  player1_properties_names,
  player2_properties_names,
  player1_properties_colours,
  player2_properties_colours,
}: Props) => {
  return (
    <div
      className="card"
      style={{ padding: 0, width: "90%", height: "19vh", top: 0 }}
    >
      <div className="card-body" style={{ padding: 0, textAlign: "center" }}>
        <h5 className="card-title">owned</h5>
        <p
          className="owned_stuff"
          style={{
            position: "relative",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          {player1_properties_names.map((p1_name, p1_index) => (
            <div
              className="card"
              style={{ float: "left", height: "14vh", width: `13%`, zIndex: 0 }}
            >
              <div
                style={{
                  width: `100%`,
                  height: "11vh",
                  backgroundColor: player1_properties_colours[p1_index],
                }}
                className="card-img-top"
              >
                <div
                  className="card-body"
                  style={{ padding: 0, textAlign: "center" }}
                >
                  <h5 className="card-title">{p1_name}</h5>
                </div>
              </div>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};
export default OwnedProperties;
