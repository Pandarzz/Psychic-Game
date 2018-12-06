

// Make variables
// Letters A-Z make an array.

// Wins and Loses Wins = 0 and Loses = 0
// Guesses left = 10 Guesses
// Your guesses so far =  Empty Array. Put the guesses into an array. 

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var loses = 0;

var guesses = 10;

var guessFar = [];


// Random letter generator

var lettersGenerator = letters[Math.floor(Math.random() * letters.length)];
console.log(lettersGenerator);

// Onkeyup event and create a event.key

document.onkeyup = function(event)  {

    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess == lettersGenerator) {
        console.log("You win!");
        alert("You have won!")
        wins++;
        winsContainer.textContent = wins;
        guesses = 10;
        guessesContainer.textContent = guesses;
        guessesFar = [];
        guessFarContainer.textContent = "";
        lettersGenerator = letters[Math.floor(Math.random() * letters.length)];
        console.log(lettersGenerator); 
    } else {

        guesses--;
        console.log("Incorrect Guess");
        guessesContainer.textContent = guesses;
        guessFar.push(userGuess);
        guessFarContainer.textContent = guessFar;
        losesContainer.textContent = loses;
        
    } 
    if (guesses === 0) {
        loses++;
        losesContainer.textContent = loses;
        alert("Sorry, try again!")
        guesses = 10;
        guessesContainer.textContent = guesses;
        guessesFar = [];
        guessFarContainer.textContent = "";
        lettersGenerator = letters[Math.floor(Math.random() * letters.length)];
console.log(lettersGenerator);
    }
}




// DOM Elements.
var winsContainer = document.getElementById("wins");
var losesContainer = document.getElementById("losses");
var guessesContainer = document.getElementById("guessesleft");
var guessFarContainer = document.getElementById("far");

winsContainer.textContent = wins;
losesContainer.textContent = loses;
guessesContainer.textContent = guesses;
guessFarContainer.textContent = guessFar;



