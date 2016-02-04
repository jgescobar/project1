console.log("Connect Cuatro")

// Place Move on Board



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

