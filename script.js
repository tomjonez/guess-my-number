'use strict';

const COLORS = {
    default: "#222222",
    success: "#60b347",
    failure: "#FF0000",
};

const MESSAGES = {
    start: "Start guessing...",
    badInput: "Enter a valid number between 1 and 20!",
    correct: "Correct!",
    tooHigh: "Too High!",
    tooLow: "Too Low!",
    lose: "You Lose! Reset to try again!",
};

const elements = {
    guess: document.querySelector('.guess'),
    message: document.querySelector('.message'),
    check: document.querySelector('.check'),
    number: document.querySelector('.number'),
    score: document.querySelector('.score'),
    highScore: document.querySelector('.highscore'),
    body: document.querySelector('body'),
};

let answer = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let resetGame = false;

function updateMessage(text) {
    elements.message.textContent = text;
}

function updateButton(text) {
    elements.check.textContent = text;
}

function updateBackgroundColor(color) {
    elements.body.style.backgroundColor = color;
}

function updateHiddenNumber(value) {
    elements.number.textContent = value;
}

function updateScore(value) {
    elements.score.textContent = value;
}

function resetGameState() {
    score = 20;
    answer = Math.trunc(Math.random() * 20 + 1);
    elements.guess.value = "";
    updateBackgroundColor(COLORS.default);
    updateButton("Check!");
    updateHiddenNumber("?");
    updateScore(score);
    updateMessage(MESSAGES.start);
    elements.guess.focus();
    resetGame = false;
}

function handleGuess() {
    if (resetGame) {
        resetGameState();
        return;
    }

    const guess = Number(elements.guess.value);

    if (!guess || guess < 1 || guess > 20) {
        updateMessage(MESSAGES.badInput);
        return;
    }

    if (guess === answer) {
        if (score > highScore) {
            highScore = score;
            elements.highScore.textContent = highScore;
        }
        updateHiddenNumber(answer);
        updateMessage(MESSAGES.correct);
        updateBackgroundColor(COLORS.success);
        updateButton("Reset");
        resetGame = true;
    } else {
        if (score > 1) {
            updateMessage(guess > answer ? MESSAGES.tooHigh : MESSAGES.tooLow);
            score--;
            updateScore(score);
        } else {
            updateBackgroundColor(COLORS.failure);
            updateMessage(MESSAGES.lose);
            updateButton("Reset");
            resetGame = true;
        }
    }
}

elements.check.addEventListener('click', handleGuess);
