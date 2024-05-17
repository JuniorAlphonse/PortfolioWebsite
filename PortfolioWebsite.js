function onButtonClick() {
    document.body.style.backgroundColor = "lightblue";
}
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

function secondButtonClick() {
    document.body.style.backgroundColor = "white";
}
const secondButton = document.getElementById('second-Button');
secondButton.addEventListener('click', secondButtonClick);