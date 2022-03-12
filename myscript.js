let board = document.getElementById('Board');
let box = board.getElementsByTagName('div');
let message = document.getElementById('mssg');
let currentPlayer = 'X',
  X = 'X',
  O = 'O';

message.innerHTML = 'Current Player: ' + currentPlayer;

for (let i = 0; i < 9; i++) {
  box[i].addEventListener('click', fillbox);
}

function fillbox() {
  if (
    this.innerHTML != 'X' &&
    this.innerHTML != 'O' &&
    message.innerHTML == 'Current Player: ' + currentPlayer
  ) {
    this.innerHTML = currentPlayer;
    // this.style.fontSize = "30px";
    changeplayer();
    game(X);
    game(O);
  }
}

function changeplayer() {
  if (currentPlayer == 'X') {
    currentPlayer = 'O';
  } else if (currentPlayer == 'O') {
    currentPlayer = 'X';
  }
  message.innerHTML = 'Current Player: ' + currentPlayer;
}

function restart() {
  for (let i = 0; i < 9; i++) {
    box[i].innerHTML = '';
  }
  message.innerHTML = 'Current Player: ' + currentPlayer;
}

function game(player) {
  let isBoardFull = 0;
  for (let j = 0; j < 9; j++) {
    isBoardFull += box[j].innerHTML.length;
  }

  if (
    box[0].innerHTML == player &&
    box[1].innerHTML == player &&
    box[2].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[3].innerHTML == player &&
    box[4].innerHTML == player &&
    box[5].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[6].innerHTML == player &&
    box[7].innerHTML == player &&
    box[8].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[0].innerHTML == player &&
    box[3].innerHTML == player &&
    box[6].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[1].innerHTML == player &&
    box[4].innerHTML == player &&
    box[7].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[2].innerHTML == player &&
    box[5].innerHTML == player &&
    box[8].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[0].innerHTML == player &&
    box[4].innerHTML == player &&
    box[8].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else if (
    box[6].innerHTML == player &&
    box[4].innerHTML == player &&
    box[2].innerHTML == player
  ) {
    message.innerHTML = player + ' is the Winner!';
  } else {
    if (isBoardFull == 9 && message.innerHTML != player + ' Is The Winner!') {
      message.innerHTML = "It's A Draw!";
    }
  }
}
