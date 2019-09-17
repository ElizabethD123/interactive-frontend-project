const cards = document.querySelectorAll('.game-card');

let hasTurnedOverCard = false;
let cardOne, cardTwo;

function flipCard() {
  this.classList.add('flip');

  if (!hasTurnedOverCard) {
    // first click
    hasTurnedOverCard = true;
    cardOne = this;

    return;
  }

  // second click
  hasTurnedOverCard = false;
  cardTwo = this;

  matchChecking();
}

function matchChecking() {
  let isMatch = cardOne.dataset.name === cardTwo.dataset.name;

  isMatch ? matchFound() : noMatch();
}

function matchFound() {
  cardOne.removeEventListener('click', flipCard);
  cardTwo.removeEventListener('click', flipCard);
}

function noMatch() {
  setTimeout(() => {
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');
  }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));

  