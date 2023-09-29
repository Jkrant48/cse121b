/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    let result = number1 + number2;
    return result;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    let result1 = number1 - number2;
    return result1
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#difference').value = difference;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    const result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers =() => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    const quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotient;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let cuurentYear = currentDate.getFullYear();

document.querySelector('#year').textContent = cuurentYear;


/* ARRAY METHODS - Functional Programming */
let myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').textContent = myNumbers;

/* Output Odds Only Array */
let oddNumbers = myNumbers.filter((number) => number % 2 > 0);
document.querySelector('#odds').textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = myNumbers.filter((number) => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers;
/* Output Sum of Org. Array */
let sum = myNumbers.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
let numberMultiplied = myNumbers.map((number) => number * 2);
document.querySelector('#multiplied').textContent = numberMultiplied;

/* Output Sum of Multiplied by 2 Array */
let multiplied = myNumbers.map((number) => number * 2);
document.querySelector('#sumOfMultiplied').textContent = multiplied.reduce((sum, number) => sum + number);

