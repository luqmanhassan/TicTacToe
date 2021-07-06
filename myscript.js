/* Key Logic:

1 - Turn Switches Till GameOver
2 - Player Turn Marks whatever box it selects 
2.5 - Cant fill boxes thats already marked 
3 - Selectiosn Get Stored in An Array
4 - Array gets checked - If Sucess end game - if not continue 
5 - restart button clears boxes and array
6 - After GameOver, board cannot be selected & only restart works
*/

let board = document.getElementById("Board");
let box = board.getElementsByTagName("div");
let message_box = document.getElementById("mssg");
let currentPlayer,
    X = "X",
    O = "O";

currentPlayer = "X";
message_box.innerHTML = "Current Player: " + currentPlayer;



for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", squares);
}

function squares() {

    if (this.innerHTML != "X" && this.innerHTML != "O" && message_box.innerHTML == "Current Player: " + currentPlayer) {
        this.innerHTML = currentPlayer;
        this.style.fontSize = "30px";
        changeplayer();
        game(X);
        game(O);
    }
}

function changeplayer() {

    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else if (currentPlayer == "O") {
        currentPlayer = "X";
    }
    message_box.innerHTML = "Current Player: " + currentPlayer;


}

function restart() {
    for (let i = 0; i < 9; i++) {
        box[i].innerHTML = "";
    }
    message_box.innerHTML = "Current Player: " + currentPlayer;
}

function game(player) {
    let isBoardFull = 0;
    for (let j = 0; j < 9; j++) {
        isBoardFull += box[j].innerHTML.length;
    }

    if (box[0].innerHTML == player && box[1].innerHTML == player && box[2].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[3].innerHTML == player && box[4].innerHTML == player && box[5].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[6].innerHTML == player && box[7].innerHTML == player && box[8].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[0].innerHTML == player && box[3].innerHTML == player && box[6].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[1].innerHTML == player && box[4].innerHTML == player && box[7].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[2].innerHTML == player && box[5].innerHTML == player && box[8].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[0].innerHTML == player && box[4].innerHTML == player && box[8].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else if (box[6].innerHTML == player && box[4].innerHTML == player && box[2].innerHTML == player) {
        message_box.innerHTML = player + " is the Winner!";
    } else {
        if (isBoardFull == 9 && message_box.innerHTML != player + " Is The Winner!") {
            message_box.innerHTML = "It's A Draw!";
        }
    }



}