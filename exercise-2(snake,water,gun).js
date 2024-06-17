//write a javascript program to create a game of snake,gun,water .the game should ask you to enter S,W,G. the computer should be able to randomly generate S,W or G and declare win or loss using alert. use confirm and prompt wherever required
function playGame(){
if (!confirm("Do you want to play Snake, Water, Gun?")) {
    return; 
}
let userChoice = prompt("Enter S for Snake, W for Water, or G for Gun:");
let computerChoice = ['S', 'W', 'G'][Math.floor(Math.random() * 3)];
if (userChoice === computerChoice) {
    alert("It's a tie! Both chose " + userChoice + "."); 
} else if (
    (userChoice === 'S' && computerChoice === 'W') ||
    (userChoice === 'W' && computerChoice === 'G') ||
    (userChoice === 'G' && computerChoice === 'S')
) {
    alert("You win! Your choice: " + userChoice + ", Computer's choice: " + computerChoice + "."); 
} else {
    alert("You lose! Your choice: " + userChoice + ", Computer's choice: " + computerChoice + "."); 
}

}
playGame();
