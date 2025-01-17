var p1Button = document.querySelector('#p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1display = document.querySelector('#p1Display');
var p2display = document.querySelector('#p2Display');
var numInput = document.querySelector('input');
var p = document.querySelector('p');
var winningScoreDisplay = document.querySelector('p span');

var p1Score = 0;
var p2Score = 0;
gameOver = false;
winningScore = 5;

p1Button.addEventListener('click', function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1display.classList.add('winner');
			gameOver = true;
		}
		p1display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function() {
	if (!gameOver) {
		p2Score++;
	}
	if (p2Score === winningScore) {
		p2display.classList.add('winner');
		gameOver = true;
	}
	p2display.textContent = p2Score;
});

resetButton.addEventListener('click', function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove('winner');
	p2display.classList.remove('winner');
	gameOver = false;
}

numInput.addEventListener('change', function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});
