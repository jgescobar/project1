console.log("Connect Cuatro")

var board = [
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null
];

var currentPlayer;
var curPage;

var playerImages = ['images/fiestyCat.jpg', 'images/scaredPug.jpg'];


function resetGame () {
  // player 0 = cat; 1 = dog;
  currentPlayer = 0;
  curPage = "game-page";

  render();
}


// for testing only
board[6] = 0;
resetGame();

function checkHorizontalWin () {
 for (i = 0; i > 4; i++) {
  array[i] === array[i+1];
  array[i] === array[i+2];
  array[i] === array[i+3];
if i === 3 || i ===
 }
}

function checkVerticalWin () {

}

function checkDiagnolWin () {

}

function render () {
  curPage === 'home-page' ? $('#home-page').show() : $('#home-page').hide();
  curPage === 'cat-dog-page' ? $('#cat-dog-page').show() : $('#cat-dog-page').hide();
  curPage === 'game-page' ? $('#game-page').show() : $('#game-page').hide();

  renderBoard();
  renderArrows();


  function renderBoard() {
    board.forEach(function(cell, idx) {
      var el = $('#cell' + idx);
      console.log(cell, idx, playerImages[cell], el)
      if (cell >= 0) el.css('background-image', playerImages[cell])
    });
  }

  function renderArrows() {
    // hide arrows if column is full
  }
}

