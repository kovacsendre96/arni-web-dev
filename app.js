
const form = document.querySelector('form');
const usernameInput = document.querySelector('.login-form__input');

form.addEventListener('submit', buttonClick)



function buttonClick(e) {
    e.preventDefault();
    alert(usernameInput.value)
    e.target.reset();
}