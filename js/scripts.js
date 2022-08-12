class Calculator {

    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    btnPress() {
        console.log(this);
    }
}

// start Object Calculator
let calc = new Calculator;

console.log(calc);

// start btns
let buttons = document.querySelectorAll('.btn');

console.log(buttons);

// map all buttons
for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}