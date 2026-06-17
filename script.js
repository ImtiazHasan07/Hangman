
let words = ['testa', 'testb', 'testc']
let word = words[Math.floor(Math.random() * words.length)]
let lettersGuessed = []

function styleElement(element, border, background, color) {
    element.style.border = border
    element.style.backgroundColor = background
    element.style.color = color
}

function toUnused(element) {
    styleElement(element, '2px solid #d3d6da', '#ffffff', '#000000')
}

function toNotInWord(element) {
    updateButton(document.getElementById(element.innerText), '#787c7e', element)
}

function toInput(element) {
    styleElement(element, '2px solid #878a8c', '#ffffff', '#000000')
}

function updateButton(button, color, element) {
    if (!['#6aaa64', '#c9b458', '#787c7e'].includes(button.style.backgroundColor) || button.style.backgroundColor === '') {
        styleElement(button, '', color, '#ffffff')
    }
    styleElement(element, `2px solid ${color}`, color, '#ffffff')
}

function hideElement(element) {
    element.hidden = true
}

function showElement(element) {
    element.hidden = false
}

function errorMessage(message) {
    let element = document.getElementById('prompt')
    showElement(element)
    document.body.innerHTML = document.body.innerHTML.replace('$promptMessage', message)
    setTimeout(() => hideElement(element), 3000)
}

function gameEndedMessage(message, word, lettersGuessed) {
    let element = document.getElementById('popup-container')
    showElement(element)
    document.body.innerHTML = document.body.innerHTML.replace('$outcome', message)
    document.body.innerHTML = document.body.innerHTML.replace('$word', word.toLowerCase())
    document.body.innerHTML = document.body.innerHTML.replace('$tries', lettersGuessed.length + 1)
    document.getElementById('close').addEventListener('click', () => hideElement(element))
    document.getElementById('continue').addEventListener('click', () => location.reload())
}

function handleInput(letter) {
    if (word.includes(letter)) {

    } else {
        
    }
}

let keyButtons = Array.from(document.getElementsByClassName('key'))
keyButtons.forEach((element) => {
    element.addEventListener('click', (event) => {
        // event.preventDefault()
        if (!document.getElementById('popup-container').hidden) return;
        
        handleInput(element.id)
    })
})

window.addEventListener('keydown', (event) => {
    // event.preventDefault()
    if (!document.getElementById('popup-container').hidden) return;

    let key = event.key.toUpperCase();
    let regex = /^[A-Z]$/i
    if (regex.test(key)) {
        handleInput(key)
    }
})