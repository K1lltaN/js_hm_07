let inputName = document.querySelector('#name-input');
let spanText = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  event.target.value ? spanText.textContent = event.target.value : spanText.textContent = 'незнакомец'
})