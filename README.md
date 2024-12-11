# Guess My Number

Uploading old projects to github from my old hard drive!

This project is part of the **"The Complete JavaScript Course 2025"** on Udemy. It is a simple number-guessing game where users try to guess a randomly generated number between 1 and 20.

## Features

- **Random Number Generation:** The game generates a new random number between 1 and 20 for each session.
- **User Interaction:** Players input their guesses and receive feedback based on their input.
- **Dynamic Feedback:** Messages guide the user if the guess is too high, too low, or correct.
- **Score Tracking:** The score decreases with each incorrect guess, and the high score is saved if the user achieves a new best.
- **Reset Functionality:** The game can be reset to start a new session.

## How to Play

1. Open the game in your browser.
2. Enter a number between 1 and 20 in the input field.
3. Click the "Check!" button to submit your guess.
4. Follow the feedback:
   - If the guess is too high, the game will display "Too High!".
   - If the guess is too low, the game will display "Too Low!".
   - If the guess is correct, the game will display "Correct!" and update the high score if applicable.
   - If the score reaches zero, the game ends with a "You Lose!" message.
5. Click the "Reset" button (or press Enter) to start a new game.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tomjonez/guess-my-number.git
   ```
2. Open the `index.html` file in your browser to play the game.

## Project Structure

```
project-folder/
├── index.html       # HTML structure of the game
├── style.css        # Styling for the game UI
├── script.js        # JavaScript logic for the game
└── README.md        # Documentation of the project
```

