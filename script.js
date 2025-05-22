// Calculator functionality
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    
    // Clear previous classes
    resultDiv.className = '';
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers';
        resultDiv.classList.add('error');
        return;
    }
    
    let result;
    
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.textContent = 'Error: Division by zero';
                resultDiv.classList.add('error');
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            resultDiv.textContent = 'Invalid operation';
            resultDiv.classList.add('error');
            return;
    }
    
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.add('success');
}

// Mathematical operations (these will be tested)
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Set deployment time (only in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const deployTime = document.getElementById('deploy-time');
        deployTime.textContent = new Date().toLocaleString();
    });
}

// Export functions for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        add,
        subtract,
        multiply,
        divide
    };
}