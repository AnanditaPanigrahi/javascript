//write a javascript program to generate a random number and store it in a variable. the program then takes an input from the user to tell them whether the guess was correct ,greater or lesser than the original number. 100-(no. of guesser) is the score of the user the program is expected to terminals once the numbers is glossed numbers should be between 1-100 

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    let userGuess = prompt("Guess a number between 1 and 100:");
    attempts++;
    
    if (userGuess == randomNumber) {
        let score = 100 - attempts;
        alert("Congratulations! You guessed the correct number. Your score is: " + score);
    } else if (userGuess > randomNumber) {
        alert("Your guess is too high. Try again.");
        guessNumber();
    } else if (userGuess < randomNumber) {
        alert("Your guess is too low. Try again.");
        guessNumber();
    }
}

guessNumber();
