console.log("Linked!");

var currentPlayer;

var curPage

var board;

document.getElementById("start")
        .addEventListener("click", function(evt) {
          showImage();
        });

// this displays the cat vs dog img once start button is clicked
function showImage() {
     curPage = 'cat-dog-page';
     $('#cat-dog-page').delay(1000).fadeOut();
     render();
     startGame();
}


// Place Move on Board
function move(columnIndex) {
  var holderID;
  for (var i = 0; i < 6; i += 1) {
    if(board[i][columnIndex] !== null)
      holderID = i -1;
      break;
    }
  if (holderID === undefined) {
    board[5][columnIndex] = currentPlayer;
  } else {
    board[holderID][columnIndex] = currentPlayer;
  }
  alternateTurn();
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

// Start/restart the game
function startGame() {
  board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ];
  currentPlayer = 1;
}
// Win Conditions

// Helper to see State of Game - Print the Board
function stateOfGame() {
  for (var i = 0; i < board.length; i += 1) {
      console.log(board[i][0],
                  board[i][1],
                  board[i][2],
                  board[i][3],
                  board[i][4],
                  board[i][5],
                  board[i][6]);
  }
}

function render () {
  curPage === 'home-page' ? $('#home-page').show() : $('#home-page').hide();
  curPage === 'cat-dog-page' ? $('#cat-dog-page').show() : $('#cat-dog-page').hide();
  curPage === 'winner-page' ? $('#winner-page').show() : $('#winner-page').hide();
}

