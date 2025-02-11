const main = document.querySelector('.main');


const output = document.createElement('div');
const btn = document.createElement('button');
const inputContainer = document.createElement('div')

const game = {score: 0, num: 4}

main.append(output);
main.append(btn);
main.append(inputContainer);

btn.textContent = 'Start'
outputMessage('Click Start To Play')

btn.addEventListener('click', (e) => {
    if(btn.textContent === 'Start') {
        btn.textContent = 'Check Answer'
        outputMessage('Guess The Correct')
        gameBoard()
        

    }else if (btn.textContent === 'Check Answer') {
        btn.textContent = 'Start'
        checkAnswer()
        
    }
})

function outputMessage(message) {
    output.innerHTML = message
}

function gameBoard() {
    for(let i = 0; i < game.num; i++) {
        const numberInput = document.createElement('input');
        numberInput.classList.add('.dial');
        inputContainer.append(numberInput);
        numberInput.setAttribute('type', 'number')
        numberInput.correct = Math.floor(Math.random() * numberInput.max)
        numberInput.max = 9
        numberInput.min = 1
    }
}