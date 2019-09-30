const cards = document.querySelectorAll('.game-card');

function cardFlip() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', cardFlip));