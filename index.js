const inputBox = document.querySelector('#inputBox')
const num = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const ac = document.querySelector('#ac')
const del = document.querySelector('#del')
const equal = document.querySelector('#equal')
const mod = document.querySelector('#mod')
const decimal = document.querySelector('#decimal')


let num1 = 0
let temp = 0
let num2 = 0
let opr = ''
let result = 0
let count = 0

num.forEach((item) => {
    item.addEventListener('click', () => {
        inputBox.value += item.innerHTML
        num1 = Number(inputBox.value)
        console.log('num1', num1);
    })
})

operator.forEach((item) => {
    item.addEventListener('click', () => {
        count = 0
        temp = num1
        console.log('temp', temp);
        inputBox.value = ''
        inputBox.value += item.innerHTML
        opr = inputBox.value
        inputBox.value = " "
        console.log("opr", opr);
    })
})
equal.addEventListener('click', () => {
    count = 0
    num2 = inputBox.value
    console.log('num2', num2);
    if (opr === "+") {
        console.log('num2', num2);
        result = Number(temp) + Number(num2)
        console.log('result', result);
        inputBox.value = result
        num1 = result

    } else if (opr === "-") {
        result = Number(temp) - Number(num2)
        inputBox.value = result
        num1 = result

    } else if (opr === "*") {
        result = Number(temp) * Number(num2)
        inputBox.value = result
        num1 = result

    } else if (opr === "/") {
        result = Number(temp) / Number(num2)
        inputBox.value = result
        num1 = result
    }
})

ac.addEventListener('click', () => {
    count = 0
    inputBox.value = ""
})

del.addEventListener('click', () => {
    if (inputBox.value === "NaN" || inputBox.value === "Infinity" || inputBox.value === "-Infinity")
        inputBox.value = ""
    inputBox.value = inputBox.value.slice(0, -1)

})

mod.addEventListener('click', () => {
    num1 = num1 / 100
    inputBox.value = num1

})

decimal.addEventListener('click', () => {
    if (count === 0) {
        inputBox.value += decimal.innerHTML;
        count++
    }
})









