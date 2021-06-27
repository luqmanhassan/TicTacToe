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

for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", fillBox);
}

function fillBox() {
    this.innerHTML = "X";
    this.style.fontSize = "30px";
}


function restart() {
    for (let i = 0; i < 9; i++) {
        box[i].innerHTML = "";
    }
}