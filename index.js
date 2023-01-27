import { cards } from "/cards.js";

const cardRender = document.getElementById("cardRender");

function distributeCards(id) {
  cards.forEach(function (card) {
    id.innerHTML += `
    <div class="cardRender" id="cardRender">
        <img src="${card.image}" class="card-img" alt="image" />
        <h2 class="h2-home-style">${card.header}</h2>
        <p class="p-home-style"><a href="${card.link}">Read more</a></p>
    </div>
          `;
  });
}

distributeCards(cardRender);
