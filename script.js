// Project: Calculator

let calcScreen = document.getElementById("calc-screen");
let previousNumber = document.getElementById("previous-number");

let input = document.getElementById("input");
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operator")
let numberDecimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
let deleteNumber = document.getElementById("delete");


let displayNumber = "0";

let num1;
let num1Integer;
let num1WithCommas;
let num2;
let num2Integer;
let num2WithCommas;
let sum;
let operator = "";
let totalNum = "";
let totalNumWithCommas = "";

clear.addEventListener("click", function () {
    previousNumber.innerText = "";
    input.innerText = "";
    num1 = "";
    num2 = "";
    num1WithCommas = "";
    num2WithCommas = "";
    operator = "";
});

deleteNumber.addEventListener("click", function () {
    if (operator === "") {
        num1 = Number(num1.toString().slice(0, -1));
        num1Integer = Number(num1)
        num1WithCommas = num1Integer.toLocaleString();
        console.log(num1WithCommas)
        input.innerText = num1WithCommas;
    } else {
        num2 = Number(num2.toString().slice(0, -1));
        num2Integer = Number(num2)
        num2WithCommas = num2Integer.toLocaleString();
        previousNumber.innerText = num1WithCommas + " " + operator;
        console.log(num2WithCommas)
        input.innerText = num2WithCommas;
    }
})


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") {
            num1 += e.target.innerText;
            num1Integer = Number(num1)
            num1WithCommas = num1Integer.toLocaleString();
            console.log(num1WithCommas)
            input.innerText = num1WithCommas;
        } else {
            num2 += e.target.innerText;
            num2Integer = Number(num2)
            num2WithCommas = num2Integer.toLocaleString();
            previousNumber.innerText = num1WithCommas + " " + operator;
            console.log(num2WithCommas)
            input.innerText = num2WithCommas;
        }
    })
});


numberDecimal.addEventListener("click", e => {
    if (operator === "") {
        if (num1 - Math.floor(num1) == 0) {
            num1 += e.target.innerText;
        }
        else num1 = num1;
        console.log(num1);

    }
    else {
        if (num2 - Math.floor(num2) == 0) {
            num2 += e.target.innerText;
        }
        else num2 = num2;
        console.log(num2);

    }

})


operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;

            console.log(num1WithCommas);
            console.log(operator);

        } else {
            console.log(num2);

            switch (operator) {
                case "+":
                    sum = Number(num1) + Number(num2);
                    totalNum = Number(sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log(totalNumWithCommas);
                    previousNumber.innerText = num1WithCommas + " " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;

                case "-":
                    sum = Number(num1) - Number(num2);
                    totalNum = Number(sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log(totalNumWithCommas);
                    previousNumber.innerText = num1WithCommas + " " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;

                case "/":
                    sum = Number(num1) / Number(num2);
                    totalNum = Number(sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log(totalNumWithCommas);
                    previousNumber.innerText = num1WithCommas + " " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;

                    break;

                case "*":
                    sum = Number(num1) * Number(num2);
                    totalNum = Number(sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log(totalNumWithCommas);
                    previousNumber.innerText = num1WithCommas + " " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;

                case "%":
                    sum = (num1 * num2) / 100;
                    totalNum = Number(sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log(totalNumWithCommas);
                    previousNumber.innerText = num1WithCommas + " " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;

                default:
                    break;
            }
        }
    });
});

