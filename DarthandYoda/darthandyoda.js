let currentPlayer = "O";
let won = false;

function startGame() {
  let cells = document.querySelectorAll(".row div");
  cells.forEach(function (cell) {
    cell.innerText = "";
  });
  won = false;
  currentPlayer = "O";
}

startGame();

function place(box) {
  if (box.innerText != "" || won) return;
  box.innerText = currentPlayer;
  currentPlayer == "O" ? (currentPlayer = "X") : (currentPlayer = "O");
  checkBoard();
}
function checkBoard() {
  for (let i = 0; i <= 2; i++) {
    checkWinner(
      document.getElementById(i + "_0").innerText,
      document.getElementById(i + "_1").innerText,
      document.getElementById(i + "_2").innerText
    );
    checkWinner(
      document.getElementById("0_" + i).innerText,
      document.getElementById("1_" + i).innerText,
      document.getElementById("2_" + i).innerText
    );
  }
  checkWinner(
    document.getElementById("0_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_2").innerText
  );
  checkWinner(
    document.getElementById("0_2").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_0").innerText
  );
}
function checkWinner(first, second, third) {
  if (first != "" && first == second && first == third) {
    alert("Winner!");
    won = true;
  }
}
