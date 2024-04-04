'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let correctNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message)
{
	document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function(){
	const guess = Number(document.querySelector(`.guess`).value);

	if (!guess) //when there is no input
	{
		// document.querySelector(`.message`).textContent = `🚫 No number!`; Same thing as
		displayMessage(`🚫 No number!`);
	}else if (guess === correctNumber) //when player wins
	{
		document.querySelector(`.number`).textContent = correctNumber;
		displayMessage(`Correct Number! :D`);
		document.querySelector(`body`).style.backgroundColor = `#60b347`;
		document.querySelector(`.number`).style.width = `30rem`;

		if (score > highScore)
		{
			highScore = score;
			document.querySelector(`.highscore`).textContent = highScore;
		}
	}else if (guess !== correctNumber)
	{
		if (score > 1)
		{
			score--;
			document.querySelector(`.score`).textContent = score;
			displayMessage(guess > correctNumber ? `📈 Too high!` : `📉 Too low!`);
		}else
		{
			displayMessage(`💥 You lost the game!`);
			document.querySelector(`.score`).textContent = 0;
		}
	}
});

document.querySelector(`.again`).addEventListener(`click`, function(){ //make it possible to play again
	document.querySelector(`body`).style.backgroundColor = `#222`;
		displayMessage(`Start guessing...`);
	score = 20;
	document.querySelector(`.score`).textContent = score;
	document.querySelector(`.number`).style.width = `15rem`;
	document.querySelector(`.guess`).value = ``;
	document.querySelector(`.number`).textContent = `?`;
	correctNumber = Math.trunc(Math.random()*20) + 1;
})