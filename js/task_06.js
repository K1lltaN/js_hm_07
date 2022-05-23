let inputIsValid = document.querySelector('input');
let checkLength = Number(inputIsValid.getAttribute('data-length'));

inputIsValid.addEventListener('focus', (event) => {
  event.target.classList.remove('valid');
  event.target.classList.remove('invalid');
});

inputIsValid.addEventListener('blur', (event) => {
  event.target.value.length === checkLength ? event.target.classList.add('valid') : event.target.classList.add('invalid')
});