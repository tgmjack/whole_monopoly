import React from "react";

interface Props {
  player_money: number;
  enemy_money: number;
  turn_number: number;
}

const Infoarea = ({ player_money, enemy_money, turn_number }: Props) => {
  return (
    <div className="card" style={{ padding: 0, width: "30%", height: "15vh" }}>
      <div className="card-body" style={{ padding: 0, textAlign: "center" }}>
        <h5 className="card-title">info</h5>
        <p
          className="card-text"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          your money = £{player_money}
          <br></br>
          their money = £{enemy_money}
          <br></br>
          turn number = {turn_number}
        </p>
      </div>
    </div>
  );
};
export default Infoarea;
