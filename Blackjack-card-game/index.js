let allCards = [];
let cardSum = 0;
let player = {
  name: "Alex",
  chips: 145,
  sayHello: function () {
    console.log("Heyooo");
  },
};
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  allCards.push(firstCard, secondCard);
  cardSum += firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "; // + allCards.join(" ");
  for (let i = 0; i < allCards.length; i++) {
    cardsEl.textContent += " " + allCards[i];
  }

  sumEl.textContent = "Sum: " + cardSum;

  if (cardSum <= 20) {
    message = "Do you want to draw another card?";
  } else if (cardSum === 21) {
    message = "You have blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log("clicked!");
    let card = getRandomCard();
    cardSum += card;
    allCards.push(card);
    renderGame();
    console.log(allCards);
  }
}
