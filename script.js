'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

const correctNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector(`.number`).textContent = correctNumber;

document.querySelector(`.check`).addEventListener(`click`, function(){
	const guess = Number(document.querySelector(`.guess`).value);

	if (!guess) //when there is no input
	{
		document.querySelector(`.message`).textContent = `🚫 No number!`;
	}else if (guess === correctNumber) //when player wins
	{
		document.querySelector(`.message`).textContent = `Correct Number! :D`;
		document.querySelector(`body`).style.backgroundColor = `#60b347`;
		document.querySelector(`.number`).style.width = `30rem`;
	}else if (guess > correctNumber) //when guess is too high
	{
		if (score > 1)
		{
			score--;
			document.querySelector(`.score`).textContent = score;
			document.querySelector(`.message`).textContent = `📈 Too high!`;
		}else
		{
			document.querySelector(`.message`).textContent = `💥 You lost the game!`
			document.querySelector(`.score`).textContent = 0;
		}
		
	}else if (guess < correctNumber) //when guess is too low
	{
		if (score > 1)
		{
			score--;
			document.querySelector(`.score`).textContent = score;
			document.querySelector(`.message`).textContent = `📉 Too low!`;
		}else
		{
			document.querySelector(`.message`).textContent = `💥 You lost the game!`
			document.querySelector(`.score`).textContent = 0;
		}
	}
});