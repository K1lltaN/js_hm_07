let mainUl = document.querySelector('ul#categories');
let catUl = mainUl.querySelectorAll('.item');
console.log(`В списке ${catUl.length} категории.`);

catUl.forEach(element => {
  let h2Title = element.querySelector('h2').textContent;
  let elemCount = element.querySelectorAll('li').length;
  console.log(`Категория: ${h2Title}`);
  console.log(`Количество элементов: ${elemCount}`);
});
