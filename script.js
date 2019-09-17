const cards = document.querySelectorAll('.game-card');

function flipCard(){
    console.log('i was clicked');
    console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard));