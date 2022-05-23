let counterValue = document.querySelector("#value");
let decrementBTN = document.querySelector('button[data-action="decrement"]');
let incrementBTN = document.querySelector('button[data-action="increment"]');

let mydecrement = (counter => counter = Number(counter) - 1);
let myincrement = (counter => counter = Number(counter) + 1);

decrementBTN.addEventListener('click', () => {
  counterValue.textContent = mydecrement(counterValue.textContent);
});

incrementBTN.addEventListener('click', () => {
  counterValue.textContent = myincrement(counterValue.textContent);
});