const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  let mainUl = document.querySelector("#ingredients");
  function createLi(elem) {
    let li = document.createElement("li");
    li.textContent = elem;
    return li;
  }
  
  let menu = ingredients.map((li)=> {
    return createLi(li);
  });
  
  mainUl.append(...menu);