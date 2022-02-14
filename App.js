//selecting elements
const inputBar = document.querySelector('.inputTxt');
const inputBtn = document.querySelector('.btnAdd');
const cards = document.querySelectorAll('.cards');
const cardsDiv = document.querySelector('.cardsAll');
const btnDelete = document.querySelectorAll('.btnDelete');
const cardsNum = document.querySelector('.cardsNum');
const checkbox = document.querySelectorAll('.checkboxes');

inputBtn.disabled = true;
let inputCounter = 1;

//create card func
function addCard() {
  const todoCard = document.createElement('div');
  todoCard.classList.add('cards');
  todoCard.innerHTML = `
        <div class="cardsNum">${cardsDiv.children.length + 1}</div>
        <input type="checkbox" class="checkboxes"
         name="${cardsDiv.children.length + 1}" id="" />
        <p>${inputBar.value[0].toUpperCase() + inputBar.value.slice(1)}</p>
        <button value="${
          cardsDiv.childElementCount + 1
        }" class="btnDelete">X</button>
    `;
  cardsDiv.appendChild(todoCard);
}

//if inputBar less than 3, inputBtn disable
inputBar.addEventListener('input', () => {
  inputCounter = inputBar.value.length;
  if (inputCounter < 3) inputBtn.disabled = true;
  if (inputCounter >= 3) inputBtn.disabled = false;
});

//create card after click event
inputBtn.addEventListener('click', () => {
  inputBtn.disabled = true;
  inputBar.focus();
  addCard();
  inputBar.value = '';
});

// close tag
cardsDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains(`btnDelete`)) {
    cardsDiv.removeChild(e.target.parentElement);
    cardsDiv.childNodes.forEach((element, i) => {
      element.children[0].innerText = +i + 1;
      element.children[1].name = i + 1;
    });
  }
});

//if checked bcColor green-- else dark blue
cardsDiv.addEventListener('click', (e) => {
  if (e.target.type == 'checkbox' && e.target.checked) {
    cardsDiv.childNodes[+e.target.name - 1].style.backgroundColor = 'green';
  }
  if (e.target.type == 'checkbox' && !e.target.checked) {
    cardsDiv.childNodes[+e.target.name - 1].style.backgroundColor =
      'rgb(3, 38, 66)';
  }
});

//inputBtn trigger when Enter pressed
inputBar.addEventListener('keypress', function (event) {
  inputCounter = 0;
  if (event.keyCode == 13) inputBtn.click();
});
