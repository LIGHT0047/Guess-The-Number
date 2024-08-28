let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = 'Congratulations! You guessed the right number!';
        document.getElementById('result').style.color = 'green';
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = 'Too low! Try again.';
        document.getElementById('result').style.color = 'red';
    } else if (userGuess > randomNumber) {
        document.getElementById('result').textContent = 'Too high! Try again.';
        document.getElementById('result').style.color = 'red';
    }

    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
});

document.getElementById('resetGame').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
});
