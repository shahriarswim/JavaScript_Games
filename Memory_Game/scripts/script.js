// jshint esversion:6

document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "king-of-diamonds",
      img: "images/king-of-diamonds.png",
    },
    {
      name: "king-of-diamonds",
      img: "images/king-of-diamonds.png",
    },
    {
      name: "king-of-hearts",
      img: "images/king-of-hearts.png",
    },
    {
      name: "king-of-hearts",
      img: "images/king-of-hearts.png",
    },
    {
      name: "queen-of-diamonds",
      img: "images/queen-of-diamonds.png",
    },
    {
      name: "queen-of-diamonds",
      img: "images/queen-of-diamonds.png",
    },
    {
      name: "queen-of-hearts",
      img: "images/queen-of-hearts.png",
    },
    {
      name: "queen-of-hearts",
      img: "images/queen-of-hearts.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  let displayResult = document.querySelector("#result");
  let cardsChoosen = [];
  let cardsChoosenId = [];
  let cardsWon = [];

  //   Create Board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/back.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  //   Check For Match
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const choosenOneId = cardsChoosenId[0];
    const choosenTwoId = cardsChoosenId[1];
    if (cardsChoosen[0] === cardsChoosen[1]) {
      alert("You have a match!");
      cards[choosenOneId].setAttribute("src", "images/check.png");
      cards[choosenTwoId].setAttribute("src", "images/check.png");

      cardsWon.push(cardsChoosen);
    } else {
      cards[choosenOneId].setAttribute("src", "images/back.png");
      cards[choosenTwoId].setAttribute("src", "images/back.png");
      alert("Sorry! Try Again.");
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    displayResult.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      displayResult.textContent = "Congrats! You found all of the cards";
    } else {
    }
  }

  //   Flip Card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChoosen.push(cardArray[cardId].name);
    cardsChoosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChoosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
