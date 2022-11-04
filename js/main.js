let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let refreshMe = document.querySelector('.btn');
// const winner = document.getElementById('announcement');
const cont = document.getElementsByClassName('winner');

dice1.setAttribute('src', '../img/dice1.png');
dice2.setAttribute('src', '../img/dice2.png');

const diceFace = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];


refreshMe.addEventListener('click', function() {
  let randomDice1 = Math.floor(Math.random() * diceFace.length);
  let randomDice2 = Math.floor(Math.random() * diceFace.length);

  if (randomDice1 > randomDice2) {
    document.querySelector("h2").innerHTML = 'Player 1 Wins!';
  } else if (randomDice1 < randomDice2) {
    document.querySelector("h2").innerHTML = 'Player 2 Wins!';
  } else {
    document.querySelector("h2").innerHTML = 'Draw!';
  }

  dice1.setAttribute('src', '../img/' + diceFace[randomDice1]);
  dice2.setAttribute('src', '../img/' + diceFace[randomDice2]);
});
