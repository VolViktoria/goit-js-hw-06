// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем 
// свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const form = document.querySelector('.login-form');
console.log(form)
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

//    const formData = new FormData(event.currentTarget);
//     console.log(formData);


    const formEl =  event.currentTarget.elements;
    console.log(formEl);

    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email, password
    }
 console.log(formData);
    

    if (email === '' || password === '') {
        alert `Please fill all the fields`
    }
    
    console.log(formData);
    form.reset();
}

    