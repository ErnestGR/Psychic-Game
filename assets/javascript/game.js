const maxGuesses = 5;
const maxWins = 1;
const maxLoses = 5;
const maxHits = 5;
let playing = true;
let hits = 0;
let guesses = maxGuesses;
let computerChoice;
let yourGuess = "";
let wins = 0;
let loses = 0;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function resetGame() {
    hits = 0;
    wins = 0;
    loses = 0;
    guesses = maxGuesses;
    yourGuess = "";
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById('yourGuess').textContent = "Your Guess: ";
    notice("<p></p>");
    playing = true;
    console.log(computerChoice);

}
function resetGuesses() {
    console.log("resetGuesses");
    hits = 0;
    guesses = maxGuesses;
    yourGuess = "";
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById('yourGuess').textContent = "Your Guess: ";
    console.log(computerChoice);
}
function notice(message) {
    document.getElementById('messages').innerHTML = message;
}

computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

let yourGuessP = document.getElementById("yourGuess");
document.onkeyup = function (event) {
    console.log("Key", playing);

    if (playing) {
        yourGuess = event.key;


        if (yourGuess === computerChoice) {
            hits++;
        }
        else {
            guesses--;
        }

        if (hits === maxHits) {
            wins++;
            resetGuesses();
        }
        else {
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
        }

        if (wins === maxWins) {
            playing = false;
            notice("<p><h1>You win the game!</h1></p><p> Would you like to start a new game? [y/n]</p>");

        }
        if (guesses === 0) {
            loses++;

            if (loses === maxLoses) {
                playing = false;
                notice("<p><h1> You lose the game!</h1></p><p> Would you like to start a new game? [y/n]</p>");

            }
            resetGuesses();
        }
    }
    else {
        response = event.key;
        if (response == "y") {
            resetGame();
        }
    }
    document.getElementById('hits').textContent = "hits: " + hits;
    document.getElementById('wins').textContent = "Wins: " + wins;
    document.getElementById('loses').textContent = "loses: " + loses;
    document.getElementById('guessesLeft').textContent = "Guesses Left: " + guesses;
    document.getElementById('yourGuess').append(yourGuess);
    console.log("Cchoice", computerChoice, "hits", hits, "guesses", guesses, "wins", wins);
}
