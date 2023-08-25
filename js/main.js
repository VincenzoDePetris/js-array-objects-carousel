const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const main = document.getElementById("main");
const prima = document.getElementById("prima");
const dopo = document.getElementById("dopo");
const slider = document.getElementById("slider");

const items = document.getElementsByClassName("d-no");

console.log(items);

let index = 0;

dopo.addEventListener("click", function () {
  document.querySelector(".active").classList.remove("active");
  if (index < 4) {
    index++;
  } else {
    index = 0;
  }

  items[index].classList.add("active");
});

prima.addEventListener("click", function () {
  document.querySelector(".active").classList.remove("active");
  if (index > 0) {
    index--;
  } else {
    index = 4;
  }

  items[index].classList.add("active");
});
