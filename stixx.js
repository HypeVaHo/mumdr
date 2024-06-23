let hiddenNode = document.querySelector(`#hidden`)
let sushiNode = document.querySelector(`#sushi`);

sushiNode.addEventListener(`click`, function(){
        hiddenNode.classList.remove(`d-none`);
});