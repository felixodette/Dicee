let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let refreshMe = document.querySelector('.btn')

dice1.setAttribute('src', '../img/dice1.png');
dice2.setAttribute('src', '../img/dice2.png');

const diceFace = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];


refreshMe.addEventListener('click', function() {
    let randomDice1 = diceFace[Math.floor(Math.random() * diceFace.length)];
    let randomDice2 = diceFace[Math.floor(Math.random() * diceFace.length)];
    dice1.setAttribute('src', '../img/' + randomDice1);
    dice2.setAttribute('src', '../img/' + randomDice2);
});
