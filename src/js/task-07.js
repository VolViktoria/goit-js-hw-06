// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.
// input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const textEl = document.getElementById('text');
const fontSizeEl = document.getElementById('font-size-control');
console.log(textEl, fontSizeEl);

fontSizeEl.addEventListener('input', changeSize)

function changeSize(size) {
    textEl.style.fontSize=`${size.target.value}px`;
}