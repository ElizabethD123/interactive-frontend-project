const cards = document.querySelectorAll('.game-card');

let turnedOverCard = false;
let lockBoard = false;
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
        
    matchChecking();
        
    }



}

function matchChecking () {
    
        let foundMatch = cardOne.dataset.name === cardTwo.dataset.name ; 
foundMatch ? disableCard() : flipBackCard(); 


    }
    
function disableCard() {
      cardOne.removeEventListener('click', cardFlip);
            cardTwo.removeEventListener('click', cardFlip);

}

function flipBackCard() {
    
    lockBoard = true;
    
    
    
            setTimeout(() => {
                cardOne.classList.remove('flip');
                cardTwo.classList.remove('flip');
                
                lockBoard = false;
                
                
            }, 1500);
        }


cards.forEach(card => card.addEventListener('click', cardFlip));
