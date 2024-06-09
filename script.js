        // Project: Calculator

let calcScreen= document.getElementById("calc");
let previousNumber= document.getElementById("enter-previous");
let currentNumber= document.getElementById("enter-current");
let entryButtons= document.getElementById("entry-buttons");
let clear= document.getElementById("clear");
let deleteNumber = document.getElementById("delete");
let percentNumber= document.getElementById("percent");
let divideNumber= document.getElementById("divide");
let multiplyNumber= document.getElementById("multiply");
let addNumber= document.getElementById("add");
let subtractNumber= document.getElementById("subtract");
let numberOne= document.getElementById("1");
let numberTwo= document.getElementById("2");
let numberThree= document.getElementById("3");
let numberFour= document.getElementById("4");
let numberFive= document.getElementById("5");
let numberSix= document.getElementById("6");
let numberSeven= document.getElementById("7");
let numberEight= document.getElementById("8");
let numberNine= document.getElementById("9");
let numberZero= document.getElementById("0");
let numberDecimal= document.getElementById("decimal");
let numberEqual= document.getElementById("equal");

let num1;
let num2;
let sum;

clear.addEventListener("click", function() {
    previousNumber.innerText ="";
    currentNumber.innerText ="";

});


let calculator = function() {
    numberOne.addEventListener("click", () => {
        currentNumber.innerText += 1;
    } );
    
    numberTwo.addEventListener("click", () => {
        currentNumber.innerText += 2;
    } );
    
    numberThree.addEventListener("click", () => {
        currentNumber.innerText += 3;
    } );
    
    numberFour.addEventListener("click", () => {
        currentNumber.innerText += 4;
    } );
    
    numberFive.addEventListener("click", () => {
        currentNumber.innerText += 5;
    } );

    numberSix.addEventListener("click", () => {
        currentNumber.innerText += 6;
    } );

    numberSeven.addEventListener("click", () => {
        currentNumber.innerText += 7;
    } );
    
    numberEight.addEventListener("click", () => {
        currentNumber.innerText += 8;
    } );
    
    numberNine.addEventListener("click", () => {
        currentNumber.innerText += 9;
    } );
    
    numberZero.addEventListener("click", () => {
        currentNumber.innerText += 0;
    } );
    
    numberDecimal.addEventListener("click", () => {
        currentNumber.innerText += ".";
    } );
    
    addNumber.addEventListener("click", () => {
        currentNumber.innerText += "+";
    } );
    
    subtractNumber.addEventListener("click", () => {
        currentNumber.innerText += "-";
    } );
    
    divideNumber.addEventListener("click", () => {
        currentNumber.innerText += "/";
    } );
    
    multiplyNumber.addEventListener("click", () => {
        currentNumber.innerText += "*";
    } );
    
    percentNumber.addEventListener("click", () => {
        currentNumber.innerText += "%";
    } );
    
    numberEqual.addEventListener("click", () => {
        currentNumber.innerText += "=";
    } );

    
};
    
calculator();


// entryButton.addEventListener("click", function() {
    

    // console.log(currentNumber.value);
//     console.log(numberTwo.value);
//     console.log(percentNumber.value);
      
    
// });


