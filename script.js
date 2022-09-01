const firstElement = document.querySelector('div.first');
const secondElements = document.querySelectorAll('.second');
const btn = document.querySelector('button');
const ratingBtns = document.querySelectorAll('[tabindex]');
let keyValue;

btn.addEventListener('click', () => {
    if (keyValue == undefined) {
        alert('First please pick a number.')
        return
    }
    firstElement.remove();
    secondElements.forEach(element => element.style.display = 'flex');
    secondElements[2].textContent = `You selected out ${keyValue} of 5`
})



ratingBtns.forEach(element => element.addEventListener('click', (e) => {
    keyValue = e.target.textContent;
}))