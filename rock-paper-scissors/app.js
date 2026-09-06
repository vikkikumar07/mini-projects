let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let msg = document.querySelector("#msg");

const compPlay = () => {
    let choice = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return choice[idx];
}


const cheakWinner = (compWin) => {
    if(compWin) {
        msg.innerText = "You lose !"
    } else {
       msg.innerText = "You win !"
    }
}

const playGame = (userChoice) => {
    let compChoice =  compPlay();
    console.log(userChoice);
    console.log(compChoice);
    if(userChoice === compChoice) {
        msg.innerText = "Game Dwar !"

    } else {
        let compWin = true;
        if(compChoice === "rock") {
            //paper // scissors   // rock beats scissors
            compWin = userChoice === "paper" ? false : true;

        } else if(compChoice === "paper") {
            // rock // scissors  // paper beats rock
            compWin = userChoice === "rock" ? true : false;
        } else {
            // rock // paper // scissors beats paper
            compWin = userChoice === "paper" ? true : false;
        }
        cheakWinner(compWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});