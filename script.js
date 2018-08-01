var playerGuess = document.querySelector(".player-guess");
var guess = document.querySelector(".guess");
var clear = document.querySelector(".clear");
var reset = document.querySelector(".reset");
var displayPhrase = document.querySelector(".display-phrase");
var displayNumber = document.querySelector(".display-number");
var inputForm = document.querySelector(".input-form");
var randomNumber = Math.floor(Math.random() * 100 + 1);

guess.addEventListener("click", numberGuesser);
clear.addEventListener("click", inputForm.reset());
reset.addEventListener("click", location.reload(true));

function numberGuesser() {
  displayNumber.innerText = playerGuess.value;
  if (playerGuess.value < randomNumber) {
  displayPhrase.innerText = "That is too low"
      } else if (playerGuess.value > randomNumber) {
      displayPhrase.innerText = "That is too high"
          } else if (playerGuess.value = randomNumber) {
          displayPhrase.innerText = "BOOM!"
    }
}
