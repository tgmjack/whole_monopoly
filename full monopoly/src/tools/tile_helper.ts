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

  const get_svg_on_board_tile = (thisindex:string) =>
  {
    const svg = [];
    if (thisindex === "8,0")
    {
      svg.push("M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1");
    }
    
    if (thisindex === "0,8")
    {
      svg.push("M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z");
    }

    if (thisindex === "0,5")
    {
      svg.push("M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118m5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1M4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z")
    }
    if (thisindex === "5,0")
    {
      svg.push("M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118m5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1M4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z")
    }
    if (thisindex === "10,5")
    {
      svg.push("M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118m5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1M4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z")
    }
     if (thisindex === "5,10")
    {
      svg.push("M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118m5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1M4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z")
    }

    if (thisindex === "10,10")
    {
      svg.push("M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8")
    }

    if (thisindex === "0,2")
    {
      svg.push("M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94") 
    }

    if (thisindex === "6,10" )
    {
      svg.push("M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94") 
    }

    if (thisindex === "10,3")
    {
      svg.push("M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94") 
    }

    if (thisindex === "10,6" ){
      svg.push("M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4")
      svg.push("M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z")
    }

    if (thisindex === "8,10"){
      svg.push("M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4")
      svg.push("M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z")
        }

    return svg
  }

  const get_these_property_names=(indexes:number[])=>
  {
    const names = []
    for (let index = 0; index < indexes.length; index++) {
      var these_indexes = find_index(indexes[index]);
      names.push(positions[parseInt(these_indexes[0])][parseInt(these_indexes[1])][0]);
    }
    return names;
  }

  const get_these_property_colours=(indexes:number[])=>
  {
    const colours = []
    for (let index = 0; index < indexes.length; index++) {
      var these_indexes = find_index(indexes[index]);
      colours.push(get_colour_of_card(these_indexes[0]+","+these_indexes[1]));
    //  colours.push(get_colour_of_card(find_index(indexes[index])));
    
    }
    return colours;
  }





  const get_colour_of_card = (thisindex :string) =>
  {
    var colour = "";
    if (thisindex == "10,9" || thisindex == "10,7")
              { colour =  "#c29400";}
    if (thisindex == "10,1" || thisindex == "10,2" || thisindex == "10,4")
            {  colour =  "#6fa8dc"}
    if ( thisindex == "9,0" || thisindex == "7,0" || thisindex == "6,0")
            { colour = "#fbae89"}
    if (  thisindex == "4,0" || thisindex == "2,0" || thisindex == "1,0")
            { colour =  "#f1c232"}
    if (   thisindex == "0,1" || thisindex == "0,3" || thisindex == "0,4")
             { colour =  "#f44336"}
    if (   thisindex == "0,6" || thisindex == "0,7" || thisindex == "0,9")
             { colour =  "#edff00"}
    if (   thisindex == "1,10" || thisindex == "2,10" || thisindex == "4,10")
             { colour =  "#6aa84f"}
    if (   thisindex === "7,10" || thisindex === "9,10")
             { colour =  "#16537e"}
    return colour;
  }

  const get_current_card_name_and_price = (current_player_pos: number) => {
    var pos = find_index(current_player_pos);
    var price = -999;
    var name = "noooooooooope";
    if (positions[pos[0]][pos[1]][1][0] == "£"){
      price = parseInt(positions[pos[0]][pos[1]][1].replace("£",""));
      name = positions[pos[0]][pos[1]][0];
    }
    return {name, price};
  }

  const handleDiceClick = (current_player_pos: number, current_turn_counter: number) => {
    var num_rolled = Math.floor(Math.random() * 6) + 1;
    
    var new_player_pos_txt = current_player_pos + num_rolled
    var passed_go = false;
    if (new_player_pos_txt > 39)
    {
        new_player_pos_txt = new_player_pos_txt - 39;
        passed_go = true;
    }

    var display_roll_pop_up_txt = ("block");
    var display_dice_txt = ("none");
    var new_turn_counter = current_turn_counter+1;
    var buyable_bool = false
    var pos = find_index(new_player_pos_txt)
    if (buyable[pos[0]][pos[1]] == 1){buyable_bool = true}

    return {display_roll_pop_up_txt , display_dice_txt , new_player_pos_txt,num_rolled , new_turn_counter, buyable_bool, passed_go}
  };



export {positions, card_index_helper , check_row_and_col , handleDiceClick , find_index, buyable, get_current_card_name_and_price 
  ,get_these_property_names,get_these_property_colours
  , get_colour_of_card , get_svg_on_board_tile}