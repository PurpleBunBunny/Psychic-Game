// VARIABLES
// ==========================================================================

// The array of letter usable for our psychic game.
var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// We start the game with a wins/losses of 0. You get to have 9 guesses, to guess the random letter. Letters guessed will be placed in the lettersGuessed array.
var randomLetter;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];


// Function to select random letter.
randomLetter = letters[Math.floor(Math.random() * letters.length)];

// Function resets random letter on losses and wins, resets guesses left on a loss, and resets the lettersGuessed array on losses and wins.
function reset() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    guessesLeft = 9;
    lettersGuessed = [];
}

// Function runs the guessing game process.

function playGame(userGuess) {
    
    if (guessesLeft > 0) {
        if (userGuess !== randomLetter) {
            guessesLeft--;
            lettersGuessed.push(userGuess);     
        }  
        else {
            wins++;
            reset();
        }
    }
    else {
        losses++;
        reset();
    }

renderVaribles();

}
// Function to render Variables.

function renderVaribles() {
  
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#lettersGuessed").innerHTML = "Letters Guessed So Far: " + lettersGuessed;

}

renderVaribles();

// This function is run whenever the user presses a key.

document.onkeyup = function(event) {
    if (event.which <= 90 && event.which >= 65) {
        
        var userGuess = event.key.toUpperCase();
        if (lettersGuessed.indexOf(userGuess) == -1) {
            playGame(userGuess);
        }
        else {
            alert("Try another letter, you've already guessed this letter. ")
        }
              
    }

};