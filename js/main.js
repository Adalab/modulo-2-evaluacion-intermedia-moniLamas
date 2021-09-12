'use strict';

const guess = document.querySelector('.js_guessField');
const guessSubmit = document.querySelector('.js_guessSubmit');
const clue = document.querySelector('.js_textClue');
const attempts = document.querySelector('.js_attempts');

const randomNumber = getRandomNumber(100);

let count = 1;

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function writeClue(message) {
    clue.innerHTML = message;
}

function checkNumber() {
    let userGuess = parseInt(guess.value);

    if (isNaN(userGuess)) {
        writeClue('Pista: Tienes que escribir un número entero.');
    } else if (userGuess <= 0 || userGuess > 100) {
        writeClue('el número deber estar entre 1 y 100.');
    } else if (userGuess < randomNumber) {
        writeClue('Demasiado bajo.');
    } else if (userGuess > randomNumber) {
        writeClue('Demasiado alto.');
    } else if (userGuess === randomNumber) {
        writeClue(clue.innerHTML = 'Has ganado campeona!!!');
    }
}

function countAttempts() {
    attempts.innerHTML = `Número de intentos: ${count++}`;
}

function handleSubmitBtn(event) {
    event.preventDefault();
    checkNumber();
    console.log(randomNumber);
    countAttempts();
}

guessSubmit.addEventListener('click', handleSubmitBtn);