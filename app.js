// nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const brandNew = document.querySelector(".nav-branding");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// color of logo

hamburger.addEventListener("click", () => {
  brandNew.classList.toggle("active");
  setTimeout(() => {
    brandNew.classList.toggle("active");
  }, 2500);
});

// closing navbar on clicking outside

document.onclick = function (e) {
  if (
    // why exclamations?
    (!navMenu.contains(e.target) && !hamburger.contains(e.target)) ||
    close.contains(e.target)
  ) {
    navMenu.classList.remove("active");
  }
};

// tarot

const cardsValue = [
  "CHARIOT",
  "DEATH",
  "DEVIL",
  "EMPEROR",
  "EMPRESS",
  "FOOL",
  "FORTUNE",
  "HANGED",
  "HERMIT",
  "HIEROFANT",
  "JUDGEMENT",
  "JUSTICE",
  "LOVERS",
  "MAGICIAN",
  "PRIESTESS",
  "STAR",
  "STRENGTH",
  "TEMPERANCE",
  "WORLD",
];

const shuffleArray = () => {
  for (let i = cardsValue.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * cardsValue.length);
    const temp = cardsValue[i];
    cardsValue[i] = cardsValue[j];
    cardsValue[j] = temp;
  }
};

window.onload = function () {
  shuffleArray();
};

let deck = document.querySelector("#deck");
let result = document.querySelector("#result");
let table = document.querySelector("#cards");
let content = document.querySelector(".content");
let message = document.querySelector(".text-after-prediction");
let hidden;
let card;

let addingCard = function () {
  if (cardsValue.length > 14) {
    let cardImg = document.createElement("img");
    let card = cardsValue.pop(0);
    cardImg.src = "./cards/" + card + ".jpg";
    cardImg.setAttribute("class", "img-appear");
    table.append(cardImg);
    setTimeout(function () {
      cardImg.classList.toggle("active");
    }, 0);
  }

  if (cardsValue.length == 14) {
    setTimeout(function () {
      message.classList.toggle("white");
      content.setAttribute("class", "black");
    }, 500);
  }
};

console.log(message);

deck.addEventListener("click", addingCard);

// message after prediction
