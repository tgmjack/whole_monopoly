import React from 'react'



const buyable = [
  [
    0,1,0,1,1,1,1,1,1,1,0
  ],
  [
    1,0,0,0,0,0,0,0,0,0,1
  ],

  [
    1,0,0,0,0,0,0,0,0,0,1
  ],
  [
    0,0,0,0,0,0,0,0,0,0,0
  ],
  [
    1,0,0,0,0,0,0,0,0,0,1
  ],
  [
    1,0,0,0,0,0,0,0,0,0,1
  ],
  [
    1,0,0,0,0,0,0,0,0,0,0
  ],
  [
    1,0,0,0,0,0,0,0,0,0,1
  ],
  [
    1,0,0,0,0,0,0,0,0,0,0
  ],
  [
    1,0,0,0,0,0,0,0,0,0,1
  ],
  [
     0,1,1,0,1,1,0,1,0,1,0
  ],
];



const positions = [
    [
      ["free parking ", ""],
      ["strand", "£220"],
      ["chance", ""],
      ["fleet street", "£220"],
      ["trafalga square", "£240"],
      ["Fenchurch Station", "£200"],
      ["Leicester Square", "£260"],
      ["Coventry Street", "£260"],
      ["water works", "£150"],
      ["Piccadilly", "£280"],
      ["go to jail", ""],
    ],
    [
      ["Vine Street", "£200"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blankhg", "blank"],
      ["blankh", "blank"],
      ["Regent Street", "£300"],
    ],

    [
      ["Marlborough Street", "£180"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["Oxford Street", "£300"],
    ],
    [
      ["community chest", ""],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["community chest", ""],
    ],
    [
      ["Bow street", "£180"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["Bond Street", "£320"],
    ],
    [
      ["Marylebone Station", "£200"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["Liverpool Street Station", "£200"],
    ],
    [
      ["Northumberland Avenue", "£160"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["blank", "blank"],
      ["chance", ""],
    ],
    [
        ["whitehall", "£140"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["park lane", "£350"],
    ],
    [
        ["electric company", "£150"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["super tax", "£100"],
    ],
    [
        ["pall mall", "£140"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["blank", "blank"],
        ["Mayfair", "$400"],
    ],
    [
      [" jail ", ""],
      [" Pentonville Road ", "£120"],
      ["Euston Road", "£100"],
      ["chance", ""],
      ["The Angel, Islington", "£100"],
      ["kings cross", "£200"],
      ["tax", "£200"],
      ["Whitechapel Road", "£60"],
      ["community chest", ""],
      ["old kent road", "£60"],
      ["go", "Collect £200"],
    ],
  ];

  const card_index_helper = [
    [
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
    ],
    [
      19,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      30
    ],
    [
      18,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      31
    ],
    [
      17,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      32
    ],
    [
      16,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      33
    ],
    [
      15,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      35
    ],
    [
      14,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      36
    ],
    [
      13,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      37
    ],
    [
      12,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      9999,
      38
    ],
    [
        11,
        9999,
        9999,
        9999,
        9999,
        9999,
        9999,
        9999,
        9999,
        9999,
        39
    ],
    [
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0
    ],
  ];

  const find_index = (position: number) => {
    var index_got = [999,999]
    for (let row = 0; row < card_index_helper.length; row++ ){
      for (let collumn = 0; collumn < card_index_helper[row].length; collumn++ ){
          if (card_index_helper[row][collumn] == position)
          {
            index_got = [row, collumn]
          }
      }
    }
    if (JSON.stringify(index_got) == JSON.stringify([999,999])){throw new Error('this index not found '+ position.toString());}
    return index_got;
  }

  const check_row_and_col = (rowindex: number, colindex: number) => {
    var bool = false;
    if (rowindex == 0 || rowindex == 10) {
      bool = true;
    } else {
      if (rowindex > 0 && rowindex < 10) {
        if (colindex == 0 || colindex == 10) {
          bool = true;
        }
      }
    }

    return bool;
  };


  const handleDiceClick = (current_player_pos: number, current_turn_counter: number) => {
    var num_rolled = Math.floor(Math.random() * 6) + 1;
//    var new_player_pos_txt = 999
    console.log(current_player_pos , num_rolled);    
    var new_player_pos_txt = current_player_pos + num_rolled

    var display_roll_pop_up_txt = ("block");
    var display_dice_txt = ("none");
    var new_turn_counter = current_turn_counter+1;
    var buyable_bool = false
    var pos = find_index(new_player_pos_txt)
    if (buyable[pos[0]][pos[1]] == 1){buyable_bool = true}

    return {display_roll_pop_up_txt , display_dice_txt , new_player_pos_txt,num_rolled , new_turn_counter, buyable_bool}
  };



export {positions, card_index_helper , check_row_and_col , handleDiceClick , find_index, buyable}