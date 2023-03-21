const cards = document.querySelectorAll(".card");

let xFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if(!xFlippedCard) {
        xFlippedCard = true;
        firstCard = this;
        return;
    }

  secondCard = this;

  checkMatch();
  }

function checkMatch() {
    const { img: img1 } = firstCard.dataset;
    const { img: img2 } = secondCard.dataset;
  
    if (img1 === img2) {
      disableCards();
      return;
    }

    unflipCards();
}

function disableCards () {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards () {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1200)
}

function resetBoard() {
    [xFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();
  
  cards.forEach(card => card.addEventListener('click', flipCard));