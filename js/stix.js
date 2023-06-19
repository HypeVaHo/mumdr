let loginButton = document.querySelector(`#login-button`);
let promocodeInput = document.querySelector(`#promocode`);
let validNode = document.querySelector(`#valid`);
let invalidNode = document.querySelector(`#invalid`);
let sushiNode = document.querySelector(`#sushi`);

loginButton.addEventListener(`click`, function(){
    if (promocodeInput.value == ``) {
        promocodeInput.classList.add(`is-invalid`);
        promocodeInput.classList.remove(`is-valid`);
        sushiNode.classList.add(`d-none`);
        invalidNode.innerHTML = `Нельзя использовать пустой ответ!`;
    } else if (promocodeInput.value == `Человек`) {
        promocodeInput.classList.add(`is-valid`);
        promocodeInput.classList.remove(`is-invalid`);
        validNode.innerHTML = `Молодец, можешь пройти дальше!`;
        sushiNode.classList.remove(`d-none`);
    } else {
        promocodeInput.classList.add(`is-invalid`);
        promocodeInput.classList.remove(`is-valid`);
        invalidNode.innerHTML = `Неправильно, попробуй снова`;
        sushiNode.classList.add(`d-none`);
    }
});