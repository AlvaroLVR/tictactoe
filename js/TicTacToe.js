/* **********************************************************************************************
 * Alvaro Valencia Rojas - TicTacToe
 * 12/2023
 *
 * Thing to do
 * - Make a validator for the initial values
 * - Empate
 * - Use localStorage for score, players and turn
 *************************************************************************************************/
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");
let square6 = document.getElementById("square6");
let square7 = document.getElementById("square7");
let square8 = document.getElementById("square8");
let square9 = document.getElementById("square9");

let time = document.getElementById("time");
let turn = document.getElementById("turn");
let score = document.getElementById("score");

let turnBoolean;
let flagTurn = true;
let X = "X";
let O = "O";

let strike = false;
let allSquare = [];

let player1 = {
  name: "",
  type: "",
};
let player2 = {
  name: "",
  type: "",
};

let game = [[], [], [], [], [], [], [], [], []];
let winner;
let square;
let tie = 0;

/* Initial Values*/

let initial = () => {
  player1.name = prompt("Ingrese el nombre del Jugador 1");
  player2.name = prompt("Ingrese el nombre del Jugador 2");

  player1.type = prompt("Jugador 1: ¿Que elegís para jugar X/O?");
  player2.type = prompt("Jugador 2: ¿Que elegís para jugar X/O?");
};



/* game */

window.addEventListener("click", (e) => {
  square = e.target;
  if (square.className == "square") {
    switch (square.id) {
      case "square1":
        choose(0);
        break;
      case "square2":
        choose(1);
        break;
      case "square3":
        choose(2);
        break;
      case "square4":
        choose(3);
        break;
      case "square5":
        choose(4);
        break;
      case "square6":
        choose(5);
        break;
      case "square7":
        choose(6);
        break;
      case "square8":
        choose(7);
        break;
      case "square9":
        choose(8);
        break;

      default:
        break;
    }
    logical();
    
    endGame();
    console.log("---game", game[2]);
  }
});

let putImageInside = (square) => {
  let img = document.createElement("img");
  img.className = "img";
  flagTurn ? (img.src = "../img/cruz.svg") : (img.src = "../img/circulo.svg");
  square.append(img);
};

let choose = (pos) => {
  if (game[pos] == '') {
    if (flagTurn) {
      /* turnBoolean = false; */
      flagTurn = false;
      turn.innerText = X;
    } else {
      /* turnBoolean = true; */
      flagTurn = true;
      turn.textContent = O;
    }
    game[pos] = turn.innerText;  
    putImageInside(square); 
  }
};

/* game logica */
function logical() {
  
  /* horizontal line  */
  if (game[0] == game[1] && game[0] == game[2]) {
    strike = true;
  }
  if (game[3] == game[4] && game[3] == game[5]) {
    strike = true;
  }
  if (game[6] == game[7] && game[6] == game[8]) {
    strike = true;
  }
  /* vertical line  */
  if (game[0] == game[3] && game[0] == game[6]) {
    strike = true;
  }
  if (game[1] == game[4] && game[1] == game[7]) {
    strike = true;
  }
  if (game[2] == game[5] && game[2] == game[8]) {
    strike = true;
  }
  /* diagonal */
  if (game[0] == game[4] && game[0] == game[8]) {
    strike = true;
  }
  if (game[2] == game[4] && game[2] == game[6]) {
    strike = true;
  }
  /* tie */
  if (tie<=8) {
    tie++;
    if (tie == 9 ) {
      tie = 0;
      strike = true;
      console.log('---EMPATE');
    }
    console.log('---tie',tie);
  }
}

/* end game */

function endGame() {
  if (strike) {
    strike = false;
    game = [[], [], [], [], [], [], [], [], []];
    tie = 0;
    allSquare = document.querySelectorAll("img");

    allSquare.forEach((element) => {
      element.remove();
    });
  }
}
