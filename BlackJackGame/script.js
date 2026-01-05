let cards = [];
let sum = 0;
let isAlive = false;

const cardsTextElement = document.getElementById("cardsPicked");
const sumTextElement = document.getElementById("sumOfCards");
const messageTextElement = document.getElementById("messageToPlayer");
const startBtnElement = document.getElementById("startBtn");
const newCardBtnElement = document.getElementById("newCardBtn");

// Generate random card
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11; // Ace
  } else if (randomNumber > 10) {
    return 10; // J, Q, K
  } else {
    return randomNumber; // 2–10
  }
}

// Start game
startBtnElement.addEventListener("click", function () {
  isAlive = true;
  cards = [];
  sum = 0;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;

  renderGame();
});

// Draw new card
newCardBtnElement.addEventListener("click", function () {
  if (isAlive && sum < 21) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
});

// Render game state
function renderGame() {
  cardsTextElement.textContent = "Cards: " + cards.join(" ");
  sumTextElement.textContent = "Sum: " + sum;

  if (sum < 21) {
    messageTextElement.textContent = "Do you want a new card? 🙂";
  } else if (sum === 21) {
    messageTextElement.textContent = "🎉 Blackjack! You win!";
    isAlive = false;
  } else {
    messageTextElement.textContent = "💥 Bust! You lost.";
    isAlive = false;
  }
}
