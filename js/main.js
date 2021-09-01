'use strict';

let randomNumber = Math.ceil(Math.random() * 100);

const guess = document.querySelector('.js_guessField');
const guessSubmit = document.querySelector('.js_guessSubmit');

const clue = document.querySelector('.js_textClue');
const attempts = document.querySelector('.js_attempts');