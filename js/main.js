console.log("Connect Cuatro")

setTimeout(function() {
  $('h1 .animated').fadeOut()
}, 2000)

var board = [
  "CAT", "CAT", "CAT", null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  "CAT", "CAT", "CAT", "CAT", null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null
];

var currentPlayer = "CAT";
var curPage;

var playerImages = ['images/fiestykitty.jpg', '../images/pugsterscared.jpg'];

var won = false;

var startGame = function() {
  won = false;
  currentPlayer = 0;
  board = [
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null
];
};

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

var move = function(idx) {
  board[idx] = currentPlayer;
}

var renderBoard = function() {
  $("#cell0").text(board[0]);
  $("#cell1").text(board[1]);
  $("#cell2").text(board[2]);
  $("#cell3").text(board[3]);
  $("#cell4").text(board[4]);
  $("#cell5").text(board[5]);
  $("#cell6").text(board[6]);
  $("#cell7").text(board[7]);
  $("#cell8").text(board[8]);
  $("#cell9").text(board[9]);
  $("#cell10").text(board[10]);
  $("#cell11").text(board[11]);
  $("#cell12").text(board[12]);
  $("#cell13").text(board[13]);
  $("#cell14").text(board[14]);
  $("#cell15").text(board[15]);
  $("#cell16").text(board[16]);
  $("#cell17").text(board[17]);
  $('#theDiv').prepend('<img id="theImg" src="../images/fiestykitty.jpg"/>')

document.getElementById("restart")
        .addEventListener("click", function(evt) {
          startGame();
          render();
        });

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




