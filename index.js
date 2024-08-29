let addOnePoolButton = document.querySelector('.counter__addButton');
let counterText = document.querySelector('.counter_text');
let addTwoPoolButton = document.querySelector('.counter__resetButton');
let counter_text = 0;

addOnePoolButton.addEventListener('click', function()  {
    counter_text++;
    counterText.innerText = counter_text; /*внутри параграфа измени текст*/
});

addTwoPoolButton.addEventListener('click', function()  {
    counter_text = 0;
    counterText.innerText = counter_text; /*внутри параграфа измени текст*/
});
