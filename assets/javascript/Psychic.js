

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var guessedLetters =[];
var computerChoice =[];




var newComputerChoice = function () {
 computerChoice = letters[Math.floor(Math.random() * letters.length)];
};

var newguessedLetters = function () {
    document.getElementById("guesses").innerHTML = guessedLetters;
};


var newnumberOfGuesses = function () {
    document.getElementById("number-of-guesses").innerHTML = numberOfGuesses;
};



var newGame= function () {
    numberOfGuesses = 10;
    guessedLetters = [];
    newnumberOfGuesses();
    newguessedLetters();
    newComputerChoice();

};

newGame();

document.onkeyup = function (event) {
    
    var letter= event.keyCode;
    console.log(letter)

    if (event.keyCode >= 65 && event.keyCode <= 90) {
            document.getElementById("guesses").textContent= letter
   
   
        //    if (event.re peat) { return };
        // if (guessedLetters.includes(event.key)) {
            // return;
}

guessedLetters.push(event.key);

numberOfGuesses--;

newnumberOfGuesses();
newguessedLetters();

if (event.key === computerChoice) {
    alert("great Job!!! " + computerChoice + "computerChoice");
    wins++;
    document.getElementById("wins").innerHTML = wins;
    newGame();
}

if (numberOfGuesses === 0) {
    alert("The Letter I picked was " + computerChoice + ".");
    losses++;
    document.getElementById("losses").innerHTML = losses;
    newGame();
}
};



