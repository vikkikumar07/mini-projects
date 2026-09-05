let boxs = document.querySelectorAll(".box");
let win = document.querySelector(".win");
let para = document.querySelector("p");
let newGame = document.querySelector("#new-game");
let resetGame = document.querySelector("#reset-game");

let playerO = true;

let winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cheakWinner() {
    for(let winner of winnerPattern) {
        let box1 = boxs[winner[0]].innerText;
        let box2 = boxs[winner[1]].innerText;
        let box3 = boxs[winner[2]].innerText;

        if(box1 !== "" && box2 !== "" && box3 !== "") {
           if(box1 === box2 && box2 === box3) {
                para.innerText = `Winner ${box1}`;
                win.classList.remove("hide");

                boxs.forEach((box) => {
                    box.disabled = true;
                });
                return;
           }
        }
    }
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(playerO) {
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true;
        }
       box.disabled = true;
       cheakWinner();
    });
});