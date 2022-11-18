// nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const brandNew = document.querySelector(".nav-branding");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  brandNew.classList.toggle("active");
  setTimeout(() => {
    brandNew.classList.toggle("active");
  }, 2500);
});

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

// console.log(cardsValue.length);

let randomCard = cardsValue[Math.floor(Math.random() * cardsValue.length)];
console.log(randomCard);

const shuffleArray = () => {
  for (let i = cardsValue.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * cardsValue.length);
    const temp = cardsValue[i];
    cardsValue[i] = cardsValue[j];
    cardsValue[j] = temp;
  }
  console.log(cardsValue);
};

let deck = document.querySelector("#deck");
let result = document.querySelector("#result");
let table = document.querySelector("#cards");
let hidden;
let card;

let addingCard = function () {
  if (cardsValue.length > 16) {
    let cardImg = document.createElement("img");
    let card = cardsValue.pop(0);
    cardImg.src = "./cards/" + card + ".jpg";
    table.append(cardImg);
  }
};

deck.addEventListener("click", addingCard);

// function stopPrediction() {
//   if (cardsValue.length == 17) {
//     console.log("pizdec");
//   }
// }
// stopPrediction();

console.log(cardsValue.length);

// prediction();

// deck.addEventListener("click", () => {
//   let cardImg = document.createElement("img");
//   let card = cardsValue.pop(0);
//   cardImg.src = "./cards/" + card + ".jpg";
//   table.append(cardImg);
// });

//   table.append(cardImg);
// });

// function startReading() {
//   hidden = cardsValue.pop;
// }

window.onload = function () {
  shuffleArray();
};
