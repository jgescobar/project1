console.log("Connect Cuatro")

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

 var move = function(idx) {
   board[idx] = currentPlayer;
   if (gameWon()) {
     won = true;
   } else {
     if (currentPlayer === 0) {
       currentPlayer = 1;
     } else {
       currentPlayer = 0;
     }
   }
 };

 function resetGame () {
  cat = 0;
  dog = 1;
  currentPlayer = "CAT";
  curPage = "game-page";

  render();
 }


// // for testing only
 board[6] = 0;
 resetGame();

function checkHorizontalWin () {
 for (i = 0; i < 36; i += 7) {
    if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] === board[i+3]) {
      return true;  //or result true?
    } else {
      return result; // or return true?
    }
  }
};
   for (i = 1; i < 37; i+= 7) {
     if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] === board[i+3]) {
       return true;
       console.log("2nd loop true");
 } else {
   return false;
 }
 }
  for (i = 1; i < 38; i+= 7) {
     if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] === board[i+3]) {
       return true;
       console.log("3rd loop true");
 } else {
   return false;
 }
 }
   for (i = 1; i < 39; i+= 7) {
     if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] === board[i+3]) {
       return true;
       console.log("4th loop true");
 } else {
   return false;
 }
 }
 };

 function checkVerticalWin () {

 }

function checkDiagnolWin () {

}

function render () {
  curPage === 'home-page' ? $('#home-page').show() : $('#home-page').hide();
  curPage === 'cat-dog-page' ? $('#cat-dog-page').show() : $('#cat-dog-page').hide();
  curPage === 'winner-page' ? $('#winner-page').show() : $('#winner-page').hide();

  renderBoard();
  renderArrows();


  function renderBoard() {


  function renderArrows() {
    // hide arrows if column is full
  }

