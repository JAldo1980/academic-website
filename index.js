import { cards } from "/cards.js";

const cardRender = document.getElementById("cardRender");

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
