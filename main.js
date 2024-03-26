const num = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const inputBox = document.querySelector("#inputBox");
const equal = document.querySelector("#equal");

let num1 = 0;
let num2 = 0;
let temp = 0;
let opr1 = "";
let result = 0;

num.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.value);
        inputBox.value += item.innerHTML;
        num1 = Number(inputBox.value);
        console.log("num1", num1);
    });
});

operator.forEach((item) => {
    item.addEventListener("click", () => {
        temp = num1;
        console.log("temp", temp);
        console.log("num1", num1);
        inputBox.value = "";

        inputBox.value += item.innerHTML;
        opr1 = inputBox.value;
        console.log("opr1", opr1);
        inputBox.value = "";
    });
});

equal.addEventListener("click", () => {
    num2 = Number(inputBox.value);
    console.log("num2", num2);

    if (opr1 === "+") {
        result = temp + num2;
        inputBox.value = result;
        num1 = result;
    } else if (opr1 === "-") {
        result = temp - num2;
        num1 = result;
        inputBox.value = result;
    } else if (opr1 === "*") {
        result = temp * num2;
        num1 = result;
        inputBox.value = result;
    } else if (opr1 === "/") {
        result = temp / num2;
        num1 = result;
        inputBox.value = result;
    }
});
