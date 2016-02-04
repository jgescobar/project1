console.log("Linked!");

var curPage;

var board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ];

var won = false;

var currentPlayer = cat;

var cat = 1;

var dog = -1;

// // Helps see State of Game - Print the Board
function stateOfGame() {
  for (var i = 5; i >= 0; i -= 1) {
      console.log(board[0][i],
                  board[1][i],
                  board[2][i],
                  board[3][i],
                  board[4][i],
                  board[5][i],
                  board[6][i]
                  );
  }
}

// Alternate Player
function alternateTurn() {
  if (currentPlayer === 1) {
    currentPlayer = -1;
  } else {
    currentPlayer = 1;
  }
  stateOfGame();
}

// this is for my cat & dog images to appear
// createCat();

$(".cells").on("click", function(evt) {
  move($(this).attr('id').charAt(4));
});
// function createCat (){
// $(".cells").on("click", function(evt) {
//   // console.log($(this));
//   // console.log($(this).attr('id').charAt(4));
//   // $(this).css("background", "url(images/fiestykitty.jpg)").css({width: "50px"}).css({height: "50px"});
//   // $(".cells").off("click")
//   // console.log("dogs turn")
//   createDog();
// });
// }

// function createDog() {
//   $(".cells").on("click", function(evt) {
//   // console.log($(this));
//   // console.log($(this).attr('id').charAt(4));
//   // $(this).css("background", "url(images/scaredPug2.jpeg)").css({width: "50px"}).css({height: "50px"});
//   // $(".cells").off("click")
//   move($(this).attr('id').charAt(4));
//   // console.log("cats turn")
//   createCat();
// });
// }

// this displays the cat vs dog img once start button is clicked
function showImage() {
     curPage = 'cat-dog-page';
     $('#cat-dog-page').delay(1000).fadeOut();
     render();
     startGame();
}
document.getElementById("start")
        .addEventListener("click", function(evt) {
          showImage();
        });

// Start/restart the game
function startGame() {
  board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ];
  won = false;
  currentPlayer = 1;
  cat = 1
  dog = -1
  curPage;
}

// Places Move on Board
function move(columnIndex) {
  var lastNullCell = undefined;
  if (currentPlayer === 1) {
    var img = "url(images/fiestykitty.jpg)";
  } else {
    img = "url(images/scaredPug2.jpeg)";
  }
  for (var i = 5; i>=0; i -= 1) {
    // for (var x = 0; x < 7; x += 1) {
    if(board[columnIndex][i] === null){
      lastNullCell = i;
      break;
    }
  }
  $('#cell'+columnIndex+"_"+lastNullCell).css("background", img).css({width: "50px"}).css({height: "50px"});
  board[columnIndex][lastNullCell] = currentPlayer;
  if (lastNullCell === undefined) {
    // board[columnIndex][5] = currentPlayer;
    alert("column full click again");

    return;
  }
  alternateTurn();
 }




// Win Conditions
// function chkWinner(board) {
//     // Check up/down
//     for (var y = 0; y < 3; y+= 1) {
//         for (var x = 0; x < 7; x+= 1) {
//             if (board[y][x] === board[y+1][x] && board[y][x] === board[y+2][x] && board[y][x] === board[y+3][x]){
//               console.log("up down works");
//                 return true;
//           } else {
//             return result;
//           }
//         }
//       }
//     };

//   // Check left/right
    // for (var y = 0; y < 6; y+= 1) {
    //     for ( var x = 0; x < 4; x+= 1) {
    //       if (board[y][x] === board[y][x+1] && board[y][x] === board[y][x+2] && board[y][x] === board[y][x+3])
    //         console.log("left/right works");
    //             // return board[y][x];
    //       }
    //   };

//     // Check down-right
//     for (y = 0; y < 3; y++)
//         for (x = 0; x < 4; x++)
//             if (chkLine(bd[y][x], bd[y+1][x+1], bd[y+2][x+2], bd[y+3][x+3]))
//                 return bd[y][x];

//     // Check down-left
//     for (y = 3; y < 6; y++)
//         for (x = 0; x < 4; x++)
//             if (chkLine(bd[y][x], bd[y-1][x+1], bd[y-2][x+2], bd[y-3][x+3]))
//                 return bd[y][x];

//           return 0;
//           chkLine();
// }





function render () {
  curPage === 'home-page' ? $('#home-page').show() : $('#home-page').hide();
  curPage === 'cat-dog-page' ? $('#cat-dog-page').show() : $('#cat-dog-page').hide();
  curPage === 'winner-page' ? $('#winner-page').show() : $('#winner-page').hide();
}




