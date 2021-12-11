// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.



// let inputEl = document.querySelector('#validation-input');
// console.log(inputEl);
// let inputLength = inputEl.dataset.length;
// console.log(inputLength);


// inputEl.addEventListener('focus', onFocus);
// inputEl.addEventListener('blur', onBlur);


// function onFocus(event) {
// };
//   function onBlur(event) {

//   if (event.currentTarget.value.length !== inputLength) {
//     event.currentTarget.classList.add('valid');
//     event.currentTarget.remove('invalid');
//   } else {
//     event.currentTarget.remove('invalid');
//     event.currentTarget.classList.add('valid');
//   }
// }



// inputEl.addEventListener('blur', el => {
//   const text = el.currentTarget.value;

//   if (text.length === inputLength) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   }
// })


const valInEl = document.getElementById('validation-input');
const inputLength = valInEl.getAttribute('data-length');
  
valInEl.addEventListener('blur', checkVal);

function checkVal(input) {

  input.currentTarget.value.length !== parseInt(inputLength) ?
    valInEl.classList = "invalid" :
    valInEl.classList = "valid";
}