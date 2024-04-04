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


document.querySelector(`.check`).addEventListener(`click`, function(){
	const guess = Number(document.querySelector(`.guess`).value);

	if (!guess) //when there is no input
	{
		document.querySelector(`.message`).textContent = `🚫 No number!`;
	}else if (guess === correctNumber) //when player wins
	{
		document.querySelector(`.number`).textContent = correctNumber;
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

document.querySelector(`.again`).addEventListener(`click`, function(){
	document.querySelector(`body`).style.backgroundColor = `#222`;
	document.querySelector(`.message`).textContent = `Start guessing...`;
	score = 20;
	document.querySelector(`.score`).textContent = score;
	document.querySelector(`.number`).style.width = `15rem`;
	document.querySelector(`.guess`).value = ``;
	document.querySelector(`.number`).textContent = `?`;
	correctNumber = Math.trunc(Math.random()*20) + 1;
})