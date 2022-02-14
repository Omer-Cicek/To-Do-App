const inputBar = document.querySelector('.inputTxt');
const inputBtn = document.querySelector('.btnAdd');
const cards = document.querySelectorAll('.cards');
const cardsDiv = document.querySelector('.cardsAll');

console.log(cards.length);

function addCard() {
  let card = `
    <div class="cards">
        <div class="cardsNum">${cards.length}</div>
        <input type="checkbox" name="" id="" />
        <p>${inputBar.value}</p>
        <button>X</button>
    </div>
    `;
  cardsDiv.innerHTML += card;
  card.classList.add = 'cards';
}

inputBtn.addEventListener('click', () => {
  addCard();
  console.log(cards);
});
