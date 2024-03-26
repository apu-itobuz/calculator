const inputBox = document.querySelector('#inputBox')
const num = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const equal = document.getElementById('equal')
const ac = document.querySelector('#ac')
const del = document.querySelector('#del')
const mod = document.querySelector('#mod')

let num1 = 0;
let opr = '';
let num2 = 0;
let temp = 0;
result = 0;

num.forEach((item) => {
    item.addEventListener('click', () => {
        inputBox.value += item.innerHTML
        num1 = Number(inputBox.value)
    })
})

operator.forEach((item) => {
    item.addEventListener('click', () => {
        temp = num1
        inputBox.value = ''
        inputBox.value += item.innerHTML
        opr = inputBox.value
        inputBox.value = ''
    })
})

equal.addEventListener('click', () => {
    num2 = Number(inputBox.value)
    if (opr === '+') {
        result = temp + num2
        inputBox.value = result
        num1 = result
    } else if (opr === '-') {
        result = temp - num2
        inputBox.value = result
        num1 = result
    } else if (opr === '*') {
        result = temp * num2
        inputBox.value = result
        num1 = result
    } else if (opr === '/') {
        result = temp / num2
        inputBox.value = result
        num1 = result
    }
})

ac.addEventListener('click', () => {
    inputBox.value = ""
    console.log('inputBox', inputBox);
})

del.addEventListener('click', () => {

    inputBox.value = inputBox.value.slice(0, -1)
    console.log('inputBox', inputBox.value);
})

mod.addEventListener('click', () => {
    inputBox.value = num1 / 100;
    result = inputBox.value;
    num1 = result
})