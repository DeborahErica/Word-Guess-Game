var letters = ["a", "b", "c",];

// This array will hold what we guess
var guessedLetter = [];

// This variable will be randomly assigned one of the three letters
var lettersToGuess = null;

//This is what we'll use to count down
var guessesLeft = 6;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

//Below we created three functions to updateGuesses, updatedGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
    //Here we are grabbing the HTML elements and setting it equal to the guessesLeft.
    //(i.e. guessesLeft will get displayed in HTML)
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updatrGuessesSoFar = function () {
    // Here we take the guesses the user has tried -- then display it as letters seperated by commas. 
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");   
};
