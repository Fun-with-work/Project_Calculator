        // Project: Calculator

let calcScreen= document.getElementById("calc-screen");
let previousNumber= document.getElementById("previous-number");
// let entryButtons= document.getElementById("entry-buttons");

let input= document.getElementById("input");
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operator")
let numberDecimal= document.getElementById("decimal");
const clear= document.getElementById("clear");
let deleteNumber = document.getElementById("delete");

// let percentNumber= document.getElementById("percent");
// let divideNumber= document.getElementById("divide");
// let multiplyNumber= document.getElementById("multiply");
// let addNumber= document.getElementById("add");
// let subtractNumber= document.getElementById("subtract");
// let numberOne= document.getElementById("1");
// let numberTwo= document.getElementById("2");
// let numberThree= document.getElementById("3");
// let numberFour= document.getElementById("4");
// let numberFive= document.getElementById("5");
// let numberSix= document.getElementById("6");
// let numberSeven= document.getElementById("7");
// let numberEight= document.getElementById("8");
// let numberNine= document.getElementById("9");
// let numberZero= document.getElementById("0");
// let numberEqual= document.getElementById("equal");

let displayNumber = "0";

let num1;
let num1WithCommas;
let num2;
let num2WithCommas;
let sum;
let operator ="";
let totalNum = "";
let totalNumWithCommas = "";

clear.addEventListener("click", function() {
    previousNumber.innerText ="";
    input.innerText ="";
    num1 = "";
    num2 = "";
    num1WithCommas ="";
    num2WithCommas ="";
    operator = "";
});

deleteNumber.addEventListener("click", function() {
    num1 = Number (num1.toString().slice(0, -1));
    console.log (num1);
    input.innerText = num1;
} )


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator ==="") {
            num1 += e.target.innerText;
            num1WithCommas = num1.toLocaleString();
            console.log(num1WithCommas)
            input.innerText = num1WithCommas;
        } else {
            num2 += e.target.innerText;
            num2WithCommas = num2.toLocaleString();
            previousNumber.innerText= num1WithCommas +" " + operator;
            console.log(num2WithCommas)
            input.innerText = num2WithCommas;
        }
    })
});


operators.forEach (op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;

            console.log(num1WithCommas);
            console.log(operator);

        }  else  {
            console.log(num2);

            switch (operator) {
                case "+":
                    sum = Number (num1) + Number (num2);
                    totalNum = Number (sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log (totalNumWithCommas);
                    previousNumber.innerText= num1WithCommas +" " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;
                    
                case "-":
                    sum = Number (num1) - Number (num2);
                    totalNum = Number (sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log (totalNumWithCommas);
                    previousNumber.innerText= num1WithCommas +" " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;
                    
                case "/":
                    sum = Number (num1) / Number (num2);
                    totalNum = Number (sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log (totalNumWithCommas);
                    previousNumber.innerText= num1WithCommas +" " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;

                    break;
                    
                case "*":
                    sum = Number (num1) * Number (num2);
                    totalNum = Number (sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log (totalNumWithCommas);
                    previousNumber.innerText= num1WithCommas +" " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;
                    
                case "%":
                    sum = (num1 * num2) / 100;
                    totalNum = Number (sum.toFixed(4))
                    totalNumWithCommas = totalNum.toLocaleString();
                    console.log (totalNumWithCommas);
                    previousNumber.innerText= num1WithCommas +" " + operator + " " + num2WithCommas;
                    input.innerText = totalNumWithCommas;
                    break;

                default:
                    break;
            }
        }  
    });
});


// function Calculator(num1, num2, operator) {
//     operators.forEach(operator => {
//         operator.addEventListener("click", (e) => {
//             num1 = displayNumber;
//             console.log(num1);
//             operator = e.target.innerText;
//             console.log(operator);
//         })
//     })
// }

    // (input - Math.floor(input)) !== 0? 
        // input.innerText += "."
        // console.log ("decimal place")
    // : input.innerText = input.innerText
    // : console.log("it is whole")
// } );    

// addNumber.addEventListener("click", () => {
//     num1 = Number (input.innerText);
//     input.innerText = "";
//     previousNumber.innerText += "+" + " " + num1 + " ";
//     let sum = num1 + num2;
//     totalNum = Number(sum.toFixed(4))
//     num2 = num1;
//     // input.innerText = (Number(totalNum.toFixed(4)));
//     // num1 = 0;
//     console.log (totalNum.toLocaleString());
// } );
    
    
// subtractNumber.addEventListener("click", () => {
//     num1 = Number (input.innerText);
//     input.innerText = "";
//     previousNumber.innerText = num1 + " " + "-";
//     let sum= num2 - num1;
//     totalNum = Number(sum.toFixed(4))
//     num2 = num1;
//     input.innerText = (Number(totalNum.toFixed(4)));
//     // num1 = 0;
//     console.log (totalNum.toLocaleString());
// } );

// divideNumber.addEventListener("click", () => {
//     num1 = Number (input.innerText);
//     previousNumber.innerText += num1 + " " + "/";
//     let sum = num2 / num1;
//     totalNum = Number(sum.toFixed(4))
//     num2 = num1;
//     input.innerText = (Number(totalNum.toFixed(4)));
//     // num1 = 0;
//     console.log (totalNum.toLocaleString());
// } );
    
// multiplyNumber.addEventListener("click", () => {
//     num1 = Number (input.innerText);
//     previousNumber.innerText += num1 + " " + "*";
//     let sum = num2 * num1;
//     totalNum = Number(sum.toFixed(4))
//     num2 = num1;
//     input.innerText = (Number(totalNum.toFixed(4)));
//     // num1 = 0;
//     console.log (totalNum.toLocaleString());
// } );
        
// percentNumber.addEventListener("click", () => {
//     num1 = Number (input.innerText);
//     input.innerText = "";
//     previousNumber.innerText = num1 + " " + "%";
//     let sum = num2 % num1;
//     totalNum = Number(sum.toFixed(4))
//     num2 = num1;
//     num1 = 0;
//     console.log (totalNum.toLocaleString());


// } );




// entryButton.addEventListener("click", function() {

    // console.log(input.value);
//     console.log(numberTwo.value);
//     console.log(percentNumber.value);
      
// });


