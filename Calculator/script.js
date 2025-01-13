document.getElementById('result').innerHTML = '0';

function onClearScreen() {
    document.getElementById('result').innerHTML = '0';
}

const parentElement = document.getElementById('parent');
const calculation = document.getElementById('calculation');

parentElement.addEventListener('click', (event) => {
    let print = document.getElementById('result');
    if (event.target.tagName === 'SPAN') {
        if (print.innerHTML === '0') {
            print.innerHTML = event.target.textContent;
        } else {
            print.innerHTML += event.target.textContent; // Add to current input
        }
    }
});

calculation.addEventListener('click', (event) => {
    if (event.target.tagName === 'B') {
        const print = document.getElementById('result');
        const lastChar = print.innerHTML[print.innerHTML.length - 1];

        if (event.target.textContent === '=') {
            const expression = print.innerHTML;
            const result = calculateResult(expression);
            print.innerHTML = result;
        } else if (event.target.textContent === 'C') {
            onClearScreen(); // Clear the screen on pressing 'C'
        } else if (isOperator(event.target.textContent)) {
            // Prevent adding the same operator consecutively
            if (!isOperator(lastChar)) {
                print.innerHTML += event.target.textContent;
            }
        } else {
            print.innerHTML += event.target.textContent;
        }
    }
});

function isOperator(char) {
    return ['+', '-', '×', '÷'].includes(char);
}

function calculateResult(expression) {
    try {
        // Replace division and multiplication signs with correct JavaScript operators
        expression = expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        return eval(expression); // Perform the calculation
    } catch (error) {
        return "Error"; // If there's an error in calculation, show "Error"
    }
}
