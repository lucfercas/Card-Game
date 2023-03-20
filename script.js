const cards = document.querySelectorAll(".card");

let xFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!xFlippedCard) {
        xFlippedCard = true;
        firstCard = this;
    }
  }
  
  cards.forEach(card => card.addEventListener('click', flipCard));