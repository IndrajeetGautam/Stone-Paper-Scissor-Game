const user = document.getElementById("user-score");
const computer = document.getElementById("computer-score");
const res = document.getElementById('res');
window.userScore = 0;
window.computerScore = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let finalResult = Play(button.id, Computer());
        if (finalResult !== undefined) {
            res.textContent = finalResult;
        } else {
            res.textContent = "The Game has been tied";
        }

    });
});

function Play(userChoice, computerChoice) {

    if (
        (userChoice == "Stone" && computerChoice == "Scissor") ||
        (userChoice == "Paper" && computerChoice == "Stone") ||
        (userChoice == "Scissor" && computerChoice == "Paper")
    ) {
        window.userScore++;
        user.textContent = window.userScore;
        return 'You have Won the game'
    } else if (
        (userChoice == "Paper" && computerChoice == "Scissor") ||
        (userChoice == "Scissor" && computerChoice == "Stone") ||
        (userChoice == "Stone" && computerChoice == "Paper")
    ) {
        window.computerScore++;
        computer.textContent = window.computerScore;
        return 'You have lost the game'
    } else {
        return 'The Game has been tied'
    }
}

function Computer() {
    const hand = ["Stone", "Paper", "Scissor"];
    const randomSelection = Math.floor(Math.random() * hand.length);
    return hand[randomSelection];
}