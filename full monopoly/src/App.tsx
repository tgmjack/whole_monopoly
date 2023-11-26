import { useState } from "react";
import reactLogo from "./assets/react.svg";
import BoardTile from "./components/board_tile";
import Infoarea from "./components/infoarea";
import Dice from "./components/dice";
import PlayerCounter from "./components/player_counter";
import RollPopUp from "./components/roll_pop_up";
import Card from "./components/card";
import testImage from "./assets/test.png"; // Import the image here
import player_counter from "./components/player_counter";
import "./container.css";
import {
  positions,
  card_index_helper,
  check_row_and_col,
  handleDiceClick,
  find_index,
  buyable,
} from "./tools/tile_helper";

//var num_rolled = 0;

function App() {
  const player_counter_size = "30px";
  var card_position = ["30%", "30%", "40%", "40%"];
  var central_pop_up_position = ["40%", "40%", "20%", "20%"];

  const [owned_properties, set_owned_properties] = useState([]);
  const [buy_button_bool, set_buy_button_bool] = useState(false);
  const [player_money, set_player_money] = useState(1500);
  const [enemy_money, set_enemy_money] = useState(1500);
  const [turn_number, set_turn_number] = useState(0);
  const [num_rolled, set_num_rolled] = useState(0);
  const [current_player_pos, set_current_player_pos] = useState(0);
  const [display_roll_pop_up, set_display_roll_pop_up] = useState("none");
  const [display_dice, set_display_dice] = useState("block");
  const [display_card, set_display_card] = useState("none");
  const [card_landed_on_headline, set_card_landed_on_headline] = useState(
    "  nooooot   set  :(  "
  );
  const [card_landed_on_body, set_card_landed_on_body] = useState(
    "  nooooot   set  :(  "
  );

  const handlebuybutton = () => {
    // ownedproperties.push(this property)
    // setplayermoney(playermoney - price)
  };

  const handleCardClose = () => {
    set_display_card("none");
    set_display_dice("block");
  };

  //  interface DiceClickResult {
  //  display_roll_pop_up_txt: number;
  //display_dice_txt: number;
  //    new_player_pos: number;
  //}
  //const handle_dice_click = ( {display_roll_pop_up_txt, display_dice_txt, new_player_pos} : DiceClickResult) => {

  const handle_dice_click = () => {
    // Assuming handleDiceClick returns an object with these properties
    const {
      display_roll_pop_up_txt,
      display_dice_txt,
      new_player_pos_txt,
      num_rolled,
      new_turn_counter,
      buyable_bool,
    } = handleDiceClick(current_player_pos, turn_number);
    set_num_rolled(num_rolled);
    set_display_roll_pop_up(display_roll_pop_up_txt);
    set_display_dice(display_dice_txt);
    set_current_player_pos(new_player_pos_txt);
    set_turn_number(new_turn_counter);
    var pos = find_index(new_player_pos_txt);
    set_buy_button_bool(buyable_bool);
    set_card_landed_on_body(positions[pos[0]][pos[1]][1]);
    set_card_landed_on_headline(positions[pos[0]][pos[1]][0]);
    console.log(" yaaaaaayyy  1");
    setTimeout(() => {
      set_display_card("block");
      set_display_roll_pop_up("none");
    }, 2000);
  };

  return (
    <div>
      <Card
        x={card_position[0]}
        y={card_position[1]}
        width={card_position[2]}
        height={card_position[3]}
        headline={card_landed_on_headline}
        body_text={card_landed_on_body}
        image_url={""}
        visible={display_card}
        closeclick={handleCardClose}
        buyclick={handlebuybutton}
        buy_button_bool={buy_button_bool}
      />

      <RollPopUp
        x={central_pop_up_position[0]}
        y={central_pop_up_position[1]}
        width={central_pop_up_position[2]}
        height={central_pop_up_position[3]}
        roll_result={num_rolled.toString()}
        visible={display_roll_pop_up}
      />
      <Dice
        x={central_pop_up_position[0]}
        y={central_pop_up_position[1]}
        onclick={handle_dice_click}
        visible={display_dice}
      />
      <div className="container">
        {positions.map((row, rowindex) => (
          <div className="row" key={rowindex}>
            {row.map((col, colindex) => (
              <>
                <div className="col-1" key={colindex}>
                  {check_row_and_col(rowindex, colindex) && (
                    <BoardTile
                      key={rowindex.toString() + "," + colindex.toString()}
                      heading={col[0]}
                      extra_text={col[1]}
                      thisindex={
                        rowindex.toString() + "," + colindex.toString()
                      } //{rowindex} //.toString()+","+colindex.toString()}
                      theimage_path={testImage}
                    />
                  )}

                  {card_index_helper[rowindex][colindex] ==
                    current_player_pos && (
                    <PlayerCounter size={player_counter_size} />
                  )}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>

      <div>
        <Infoarea
          player_money={player_money}
          enemy_money={enemy_money}
          turn_number={turn_number}
        />
      </div>
    </div>
  );
}

export default App;
