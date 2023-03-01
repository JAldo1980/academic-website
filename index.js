import { cards } from "/cards.js";

const cardRender = document.getElementById("cardRender");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");

// HOME PAGE CARD RENDER
function distributeCards(id) {
  cards.forEach(function (card) {
    id.innerHTML += `
    <div class="cardRender" id="cardRender">
      <a href="${card.imgLink}">
        <img src="${card.image}" class="card-img" alt="image" />
        <h2 class="h2-home-style">${card.header}</h2>
        <p class="p-home-style"><a href="${card.link}">Read more</a></p>
        </a>
    </div>
          `;
  });
}
distributeCards(cardRender);

// hamburger transition
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
  mobileNavOverlay.innerHTML = `
    <ul>
      <a href="/index.html"><li>Home</li></a>
      <a href="/about.html"><li>About</li></a>
      <a href="/publications.html"><li>Publications</li></a>
      <a href="/research.html"><li>Research</li></a>
      <a href="/events.html"><li>Events</li></a>
      <a href="/podcasts.html"><li>Podcasts</li></a>
      <a href="/teaching.html"><li>Teaching</li></a>
      <a href="/media.html"><li>Media</li></a>
      <a href="/contact.html"><li>Contact</li></a>
    </ul>
  
    `;
});
