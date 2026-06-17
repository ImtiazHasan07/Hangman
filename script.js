let buttons = document.getElementsByClassName('keys')
let letterKeys = document.getElementsByClassName('letters')
let words = ['abc', 'abc', 'abc']
let word = words[Math.floor(Math.random() * words.length)]
let wordsGuessed = []

function toUnused(element) {
    element.style.border = '2px solid #d3d6da'
    element.style.backgroundColor = '#ffffff'
    element.style.color = '#000000'
    return
}

function toInput(element) {
    element.style.border = '2px solid #878a8c'
    element.style.backgroundColor = '#ffffff'
    element.style.color = '#000000'
    return
}

function toNotInWord(element) {
    let button = document.getElementById(element.innerText)
    if (button.style.backgroundColor === '#d3d6da' || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#787c7e'
        button.style.color = '#ffffff'
    }

    element.style.border = '2px solid #787c7e'
    element.style.backgroundColor = '#787c7e'
    element.style.color = '#ffffff'
    return
}

function toIncorrectOrder(element) {
    let button = document.getElementById(element.innerText)
    if (['#d3d6da', '787c7e'].includes(button.style.backgroundColor) || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#c9b458'
        button.style.color = '#ffffff'
    }

    element.style.border = '2px solid #c9b458'
    element.style.backgroundColor = '#c9b458'
    element.style.color = '#ffffff'
    return
}

function toCorrectOrder(element) {
    let button = document.getElementById(element.innerText)
    if (['#d3d6da', '787c7e', 'c9b458'].includes(button.style.backgroundColor) || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#6aaa64'
        button.style.color = '#ffffff'
    }

    element.style.border = '2px solid #6aaa64'
    element.style.backgroundColor = '#6aaa64'
    element.style.color = '#ffffff'
    return
}

function componentToHex(colour) {
    let hex = parseInt(colour).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(colours) {
    return `#${componentToHex(colours[0])}${componentToHex(colours[1])}${componentToHex(colours[2])}`;
}

function hideElement(element) {
    element.hidden = true
    return
}

function showElement(element) {
    element.hidden = false
    return
}

function errorMessage(message) {
    let element = document.getElementById('prompt')
    showElement(element)

    document.body.innerHTML = document.body.innerHTML.replace('$promptMessage', message)

    setTimeout(() => hideElement(document.getElementById('prompt')), 3000)
}

function gameEndedMessage(message, word, wordsGuessed) {
    let element = document.getElementById('popup-container')

    showElement(element)
    document.body.innerHTML = document.body.innerHTML.replace('$outcome', message)
    document.body.innerHTML = document.body.innerHTML.replace('$word', word.toLowerCase())
    document.body.innerHTML = document.body.innerHTML.replace('$tries', (wordsGuessed.length + 1))

    document.getElementById('close').addEventListener('click', () => hideElement(document.getElementById('popup-container')))
    document.getElementById('continue').addEventListener('click', () => location.reload())
}


Object.values(buttons).forEach((element) => {
    element.addEventListener('click', (event) => {
        if (event.defaultPrevented) {
            return
        }
        event.preventDefault()

        if (!document.getElementById('popup-container').hidden) return;

        let id = element.id

        if (id == 'ENTER') {
            for (let x = 0; x < 6; x++) {
                if (!wordsGuessed[x]) {
                    let userGuess;
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                            errorMessage('Please enter a word!')
                            return
                        }
                        if (!userGuess) {
                            userGuess = document.getElementsByClassName(`letter${y}`)[x].innerText
                        } else {
                            userGuess += document.getElementsByClassName(`letter${y}`)[x].innerText
                        }
                    }
                    if (!words.includes(userGuess)) {
                        errorMessage('Please enter a valid word!')
                        return
                    }
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === word[y - 1]) {
                            toCorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                            if (userGuess === word) {
                                gameEndedMessage('You have won!', word, wordsGuessed)
                            }
                        } else if (word.includes(document.getElementsByClassName(`letter${y}`)[x].innerText)) {
                            toIncorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                        } else {
                            toNotInWord(document.getElementsByClassName(`letter${y}`)[x])
                        }
                    }
                    wordsGuessed.push(userGuess)
                    break
                }
                if (wordsGuessed[6]) {
                    gameEndedMessage('You have lost!', word, wordsGuessed)
                }
            }
        } else if (id == 'BACKSPACE') {
            for (let x = (document.getElementsByClassName('boxes').length - 1); x >= 0; x--) {
                let element = document.getElementsByClassName('boxes')[x]
                if (element.innerText !== '' && rgbToHex(element.style.backgroundColor.slice(4, -1).split(', ')) === '#ffffff') {
                    element.innerText = ''
                    toUnused(element)
                    break
                }
                // else {
                //     errorMessage('There is nothing to remove!')
                // }
            }
        } else {
            for (let x = 0; x < 6; x++) {
                if (!wordsGuessed[x]) {
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                            document.getElementsByClassName(`letter${y}`)[x].innerText = id
                            toInput(document.getElementsByClassName(`letter${y}`)[x])
                            break
                        }
                    }
                    break
                }
            }
        }
    })
})

window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault()

    if (document.getElementById('popup-container').hidden === false) return;

    if (event.key.toUpperCase() == 'ENTER') {
        for (let x = 0; x < 6; x++) {
            if (!wordsGuessed[x]) {
                let userGuess;
                for (let y = 1; y < 6; y++) {
                    if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                        errorMessage('Please enter a word!')
                        return
                    }
                    if (!userGuess) {
                        userGuess = document.getElementsByClassName(`letter${y}`)[x].innerText
                    } else {
                        userGuess += document.getElementsByClassName(`letter${y}`)[x].innerText
                    }
                }
                if (!words.includes(userGuess)) {
                    errorMessage('Please enter a valid word!')
                    return
                }
                for (let y = 1; y < 6; y++) {
                    if (document.getElementsByClassName(`letter${y}`)[x].innerText === word[y - 1]) {
                        toCorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                        if (userGuess === word) {
                            gameEndedMessage('You have won!', word, wordsGuessed)
                        }
                    } else if (word.includes(document.getElementsByClassName(`letter${y}`)[x].innerText)) {
                        toIncorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                    } else {
                        toNotInWord(document.getElementsByClassName(`letter${y}`)[x])
                    }
                }
                wordsGuessed.push(userGuess)
                break
            }
            if (wordsGuessed.length >= 5) {
                gameEndedMessage('You have lost!', word, wordsGuessed)
            }
        }
    } else if (event.key.toUpperCase() == 'BACKSPACE') {
        for (let x = (document.getElementsByClassName('boxes').length - 1); x >= 0; x--) {
            let element = document.getElementsByClassName('boxes')[x]
            if (element.innerText !== '' && rgbToHex(element.style.backgroundColor.slice(4, -1).split(', ')) === '#ffffff') {
                element.innerText = ''
                toUnused(element)
                break
            }
            // else {
            //     errorMessage('There is nothing to remove!')
            // }
        }
    } else if (['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].includes(event.key.toUpperCase())) {
        for (let x = 0; x < 6; x++) {
            if (!wordsGuessed[x]) {
                for (let y = 1; y < 6; y++) {
                    if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                        document.getElementsByClassName(`letter${y}`)[x].innerText = event.key.toUpperCase()
                        toInput(document.getElementsByClassName(`letter${y}`)[x])
                        break
                    }
                }
                break
            }
        }
    } else {
        return
    }
})