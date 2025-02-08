const main = document.querySelector('.main');


const output = document.createElement('div');
const btn = document.createElement('button');
const inputContainer = document.createElement('div')

main.append(output);
main.append(btn);
main.append(inputContainer);

btn.textContent = 'Start'

btn.addEventListener('click', (e) => {
    if(btn.textContent === 'Start') {
        btn.textContent = 'Check Answer'
        gameBoard()
        

    }else if (btn.textContent === 'Check Answer') {
        btn.textContent = 'Start'
        checkAnswer()
        
    }
})

function gameBoard() {
    for(let i = 0; i < 4; i++) {
        const numberInput = document.createElement('input');
        numberInput.classList.add('.dial');
        inputContainer.append(numberInput);
        numberInput.setAttribute('type', 'number')
        const correct = Math.floor(Math.random() * numberInput.max)
        numberInput.max = 9
        numberInput.min = 1
    }
}