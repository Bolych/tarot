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
let pushMessage = document.getElementById("push");
let hidden;
let card;

let addingCard = function () {
  pushMessage.remove();
  if (cardsValue.length == 15) {
    setTimeout(function () {
      message.classList.toggle("white");
    }, 0);
  }
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
};

deck.addEventListener("click", addingCard);

// numerology

let btnYes = document.getElementById("yes-tarot");
let btnNo = document.getElementById("no-tarot");
let numerologyQuestion = document.getElementById("numerology-question");
let textAfterQuestion = document.getElementById("text-after-question");
let endConfirmQuestion = document.querySelector(".confirm-end");
let btnMain = document.getElementById("btn-main");

let numerology = document.getElementById("numerology");
let numerologyTable = document.getElementById("numerology-table");
let numerologyTableName = document.getElementById("numerology-table-name");

function numerologyAppear() {
  numerology.classList.add("show");

  numerologyTableName.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
  message.classList.toggle("white");
  setTimeout(function () {
    numerologyQuestion.classList.toggle("white");
  }, 700);
  setTimeout(function () {
    textAfterQuestion.classList.toggle("white");
  }, 1500);
  setTimeout(function () {
    endConfirmQuestion.classList.add("white");
  }, 2500);
}

// btnYes.addEventListener("click", numerologyAppear);
btnNo.addEventListener("click", numerologyAppear);

// carousel

const slider = document.querySelector(".carousel-slide");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
