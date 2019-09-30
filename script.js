const cards = document.querySelectorAll('.game-card');

let turnedOverCard = false;
let cardOne, cardTwo;



function cardFlip() {
    this.classList.add('flip');

    if (!turnedOverCard) {

        turnedOverCard = true;
        cardOne = this;
    }
    else {

        turnedOverCard = false;
        cardTwo = this;

        // card match

        if (cardOne.dataset.name === cardTwo.dataset.name) {

            cardOne.removeEventListener('click', cardFlip);
            cardTwo.removeEventListener('click', cardFlip);

        }
        else {

            setTimeout(() => {
                cardOne.classList.remove('flip');
                cardTwo.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', cardFlip));
