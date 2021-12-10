

const ulEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ ulEl.length}`)

ulEl.forEach(el => {
    const titleEl = el.querySelector('h2');
    const allLiEl = el.querySelectorAll('li');


    console.log(`category: ${titleEl.textContent}`);
    console.log(`Elements: ${allLiEl.length}`)
})