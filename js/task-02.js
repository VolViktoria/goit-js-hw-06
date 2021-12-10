const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ulEl = document.getElementById("ingredients");

const arrayEl = [];

ingredients.forEach(ingredient => {

  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  // console.log(liEl);

  arrayEl.push(liEl);

});

 ulEl.append(...arrayEl);
console.log(ulEl);

 

// const ulEl = document.getElementById("ingredients");

// const liEl = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.insertAdjacentHTML('afterbegin', liEl);
// console.log(ingredients)
