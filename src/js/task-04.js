// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const counterValue = document.getElementById('value');
let a = 0;
console.log(counterValue);
const decrementBtn = document.getElementById('counter').firstElementChild;
console.log(decrementBtn);
const incrementBtn = document.getElementById('counter').lastElementChild;
console.log(incrementBtn);

decrementBtn.addEventListener('click', () => {
    a -= 1;
    counterValue.innerText = a;
});
// console.log('remove listener');
incrementBtn.addEventListener('click', () => {
    a += 1;
    counterValue.innerText = a;
});
// console.log('add listener');