const cards = document.querySelectorAll('.game-card');

let turnedOverCard = false;
let lockBoard = false;
let cardOne, cardTwo;
let matchedCards = 0;



function cardFlip() {
    if (lockBoard) return;
    if (this === cardOne) return;

    this.classList.add('flip');

    if (!turnedOverCard) {

        turnedOverCard = true;
        cardOne = this;
    }
    else {

        turnedOverCard = false;
        cardTwo = this;

        matchChecking();

    }

}

function matchChecking() {

    let foundMatch = cardOne.dataset.name === cardTwo.dataset.name;
    foundMatch ? disableCard() : flipBackCard();
    
   matchedCards = foundMatch ? matchedCards +2: matchedCards;
   
   if (matchedCards === 12) {
        console.log(matchedCards);
   }


}

function disableCard() {
    cardOne.removeEventListener('click', cardFlip);
    cardTwo.removeEventListener('click', cardFlip);

    boardReset();

}

function flipBackCard() {

    lockBoard = true;



    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        boardReset();
    }, 500);
}

function boardReset() {

    [turnedOverCard, lockBoard] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', cardFlip));
