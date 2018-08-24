
// // guess the word phrase for the psychic game //
// var phrase = ["Happy", "Summer", "2018"];
// var guesses = ["Wins", "Loses", "Guesses Left", "Your guesses so far"];

//pick a random letter in a variable called randomLetter
var letters = "abcdefghijklmnopqrstuvwxyz";
console.log("Letters:" + letters);
var letters = letters.split("");
console.log("Letters split:" + letters);
var randomLetter =  letters[Math.floor(Math.random()*letters.length)];
console.log("Random Letter:" + randomLetter);
//var numGuesses = letters[Math.floor(Math.random()*letters.length)];

var wins = 0;
var losses = 0;
//look for a pressed letter
document.onkeyup = function(event){
    console.log("Any key hit:" + event.key);
    //script

    //check if randomLetter and pressedLetter is the same
    if(event.key == randomLetter){
        //addwins
        wins++;
        //tell the user you win
        //new random letter in a variable called randomLetter
    //else
    }else{
        //addlosses
        //tell the user you lost try again
    }
}





//var letters = ["a", "b", "c",];
// Array of word options (all lowercase)
//var wordList = ["happy", "summer", "June", "July", "August"]
//soultion here
//var chosenword = "";
//this will break the solution into individual letters to be stored in an array.
//var lettersInChosenWord = [];
//Number of blanks we show based on solution
//var numBlanks = 0;
//Holds a mix of blank and solved letters (ex: 'n,_ _, n, _').
//var blanksAndSuccesses = [];
//Holds all of the wrong guesses
//var wrongGuesses = [];

// Game counters
var winCounter = 0 ;
var lossesCounter = 0;
var numGuesses = 10;

// Functions (these are bits of code that will call upon to run when needed)
//=======================================================================================================================


// startGame()
//this is how we will start and restart the game

function startGame(){
    //Reset the guesses back to 0.
   numGuesses = 10;
}

//Solution is chosen randomly from word list
//chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
// The word is broken into individual letters. 
//LettersInChosenWord = chosenWord.split("");
//we count the number of letters in the word. 
//numBlanks = lettersInChosenWord.length;

// We print the solution in console (for testing). 
//console.log("Chosen Word:" + chosenWord);

//critical Line - reset the guess and success array at each round. 
//blanksAndSuccess = [];
// reset the wrong guesses from the previous round. 
//wrongGuesses = [];

//blankAndSuccess list with appropriate number of blanks
// number of numbers in a solution 
//for (var i = 0; i< numBlanks; i++) {
  //  blanksAndSuccess.push("_");
//}

//Print the initial blanks in console.
//console.log("blanksAndSuccess:" + blanksAndSuccess);

// Reprints the guesses left to 10
//document.getElementById("guesses-left").innerHTML = numGuesses; 

// Prints the blanks at the beginning of each round in HTML
//document.getElementById("word-blanks").innerHTML = blanksAndSuccess.join(" ");

//Clears the wrong guesses from the previous round
document.getElementById("guesses-so-far").innerHTML = wrongGuesses.join(" ");


//checkLetters() function
//It's where we will do all of the comparison matches. 
function checkLetters(letter) {

//Boolean will be toggled based on whether or not a users letter is found anywhere in the word.
 var letterInWord = false;

 // Check if a letter exists inside the array at all.
 for (var i = 0; i < numBlanks; i++) {
     if (chosenWord[i] === letter){
         // If the letter exists then toggle this boolean to true. This will used in the next step.
         letterInWord = true; 
     }
 }

 //If the letter exists somewhere in the word, then figure out exactly where 
 if (letterInWord) {
     // Loop through the word.
     for (var j = 0; j < numBlanks; j++) {
         //Populate the blanksAndSuccesses with every instance of the letter\
         if (chosenWord[j] === letter ) {
             //set the specific space in blanks and letter equal to the letter when there is a match.
             blanksAndSuccesses[j] = letter;
         } 
     }
     //logging for testing
     console.log("blanksAndSuccess2:" + blanksAndSuccesses);
 }
// if the letter doesn't exist at all...
else {
    //.. then we add the letter to the list of wrong letters, and subtract one of the guesses.
     wrongGuesses.push(letter);
     numGuesses--;
    }
}

//roundComplete(function)
// coded needed to run after each guess is made
function roundComplete() {

    //First, log an initial status update in the console telling us how many wins
  //  console.log("WinCount:" +winCounter + "| LossCount: " + lossesCounter + "| NumGuesses: " + numGuesses);

    // update the HTML to reflect the new number of guesses. Also update the correct guesses.
//document.getElementById("guesses-left").innerHTML = blanksAndSuccesses.join(" ");
// This will print the array of guesses and blanks onto the page.
document.getElementById("word-blanks").innerHTML = blanksAndSuccess.join(" ");
//This will print the wrong guesses onto the page.
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

// If all the letters match the solution
if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    // .. add to the win counter and give the user an alert 
    winCounter++;
    alert("You Win!")

    // Update the win counter in the HTML and restart the game
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
}
// If we've run out of guesses..
else if (numGuesses === 0) { 
    //Add to the loss counter
    lossCounter++;
    //give alert
    alert("You lose");

    //Update the loss counter in the HTML.
    document.getElementById("loss-counter").innerHTML = lossCounter;
    // Restart the game.
    startGame();
    }
}

// start the game by running the startGame() function
startGame();

//Then indicate the function by capturing key clicks.
document.onkeyup = function(event) { 
    //converts all key clicks to lowercase letters.
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    //Runs the code to check for correctness.
    checkLetters(letterGuessed);
    //runs the code after each round is done
    roundComplete();
};


// // This array will hold what we guess
// var guessedLetter = [];

// // This variable will be randomly assigned one of the three letters
// var lettersToGuess = null;

// //This is what we'll use to count down
// var guessesLeft = 6;

// // This is the counter for wins/losses
// var wins = 0;
// var losses = 0;

// //Below we created three functions to updateGuesses, updatedGuessesLeft, and updateGuessesSoFar
// var updateGuessesLeft = function() {
//     //Here we are grabbing the HTML elements and setting it equal to the guessesLeft.
//     //(i.e. guessesLeft will get displayed in HTML)
//     document.querySelector("#guesses-left").innerHTML = guessesLeft;
// };

// var updateLetterToGuess = function() {
//     // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
//     letterToGuess = letters[Math.floor(Math.random() * letters.length)];
// };

// var updatrGuessesSoFar = function () {
//     // Here we take the guesses the user has tried -- then display it as letters seperated by commas. 
//     document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");   
// };
