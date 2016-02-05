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

var winner = 0;

var currentPlayer = cat;

var cat = 1;

var dog = -1;

// // Helps see State of Game - Print the Board
function stateOfGame() {
  for (var i = 0; i < 6; i += 1) {
      console.log(board[0][i],
                  board[1][i],
                  board[2][i],
                  board[3][i],
                  board[4][i],
                  board[5][i],
                  board[6][i]
                  );
  }
   console.log("");
}

// Alternate Player
function alternateTurn() {
  if (currentPlayer === cat) {
    currentPlayer = dog;
  } else {
    currentPlayer = cat;
  }
  stateOfGame();
}

// this is my listener and also converts "celly_x" string to number value
$(".cells").on("click", function(evt) {
  move($(this).attr('id').charAt(4));
});


// this displays the cat vs dog img once start button is clicked
function showImage() {
     curPage = 'cat-dog-page';
     $('#cat-dog-page').delay(1000).fadeOut();
     render();
     startGame();
     renderClearBoard();
}
document.getElementById("start")
        .addEventListener("click", function(evt) {
          showImage();
        });

document.getElementById("restart")
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
  currentPlayer = cat;
  cat = 1
  dog = -1
  curPage;
}

// Places Move on Board
function move(columnIndex) {
  var lastNullCell = undefined;
  if (currentPlayer === cat) {
    var img = "url(images/fightkitty.jpg)";
  } else {
    img = "url(images/pug.jpeg)";
  }
  for (var i = 5; i>=0; i -= 1) {
    if(board[columnIndex][i] === null){
      lastNullCell = i;
      break;
    }
  }
  $('#cell'+columnIndex+"_"+lastNullCell).css("background", img).css({width: "50px"}).css({height: "50px"});
  board[columnIndex][lastNullCell] = currentPlayer;
  if (lastNullCell === undefined) {
    alert("column full click again");
    return;
  }
  winner = checkWinner();
  if (winner === cat) {

    $('#winner-page').css("zIndex", 10);
    $('#winner-page').css("display", 'block');
    $('#winner-page').css("background", "url(images/pewpew.jpg)");
    $('#meow').get(0).play();
    // setTimeout(function () {
    //   location.reload();
    // },2000)

  } else if (winner === dog) {
    $('#winner-page').css("zIndex", 10);
    $('#winner-page').css("display", 'block');
    $('#winner-page').css("background", "url(images/happypug.jpg)");
    $('#bark').get(0).play();
    // setTimeout(function () {
    //   location.reload();
    // },2000)


  } else {
    alternateTurn();
  }
 }

// REMEMBER!!!:  the first index is the COLUMN, not the ROW
// therefore it looks like this  board[col][row]


function checkWinner() {
  // return cat, dog or 0

  // check horizontal winner
  for (var row = 0; row < board[0].length; row += 1) {
    for (var col = 0; col < 4; col += 1) {
      var sum = board[col][row] + board[col+1][row] +
        board[col+2][row] + board[col+3][row];
      if (sum === 4 || sum === -4) {
        return board[col][row];
      }
    }
  }

  // check vertical winner
  for (var row = 0; row < 3; row += 1) {
    for (var col = 0; col < board.length; col += 1) {
      var sum = board[col][row] + board[col][row+1] +
        board[col][row+2] + board[col][row+3];
      if (sum === 4 || sum === -4) {
        return board[col][row];
      }
    }
  }

// // check diagnol descending (working)
  for (var row = 0; row < 3; row += 1) {
    for (var col = 0; col < 4; col += 1) {
      var sum = board[col][row] + board[col+1][row+1] +
        board[col+2][row+2] + board[col+3][row+3];
      if (sum === 4 || sum === -4) {
        return board[col][row];
      }
    }
  }
  // check diagnol ascending (not working)
  for (var row = 0; row < 3; row += 1) {
    for (var col = 0; col < 4; col += 1) {
      var sum = board[col][row] + board[col][row+1] +
        board[col+2][row+2] + board[col+3][row+3];
      if (sum === 4 || sum === -4) {
        return board[col][row];
      }
    }
  }
  return 0;
}

//     // Check down-left
//     for (y = 3; y < 6; y++)
//         for (x = 0; x < 4; x++)
//             if (chekLine(board[y][x], board[y-1][x+1], board[y-2][x+2], board[y-3][x+3]))
//                 return board[y][x];

// when this function is called, it changes pages
function render () {
  curPage === 'home-page' ? $('#home-page').show() : $('#home-page').hide();
  curPage === 'cat-dog-page' ? $('#cat-dog-page').show() : $('#cat-dog-page').hide();
  curPage === 'winner-page' ? $('#winner-page').show() : $('#winner-page').hide();
}
function renderClearBoard () {
  $('td').css("background", "none");
}



