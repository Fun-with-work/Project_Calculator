        // Project: Calculator

let calcScreen= document.getElementById("calc");
let previousNumber= document.getElementById("enter-previous");
let currentNumber= document.getElementById("enter-current");
let entryButtons= document.getElementById("entry-buttons");

// let operateButton = document.getElementsByClassName("operation");
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

let num1 = 0;
let num2 = 0;
let numOperator ="";
let totalNum = 0;

clear.addEventListener("click", function() {
    previousNumber.innerText ="";
    currentNumber.innerText ="";
    num1 = 0;
    num2 = 0;
});


let calculator = function() {
    
    numberOne.addEventListener("click", () => {
        currentNumber.innerText += 1;
        // num1.push(1);
        // console.log (num1);
    } );
    
    numberTwo.addEventListener("click", () => {
        currentNumber.innerText += 2;
        // num1.push(2);
        // console.log (num1);
    } );
    
    numberThree.addEventListener("click", () => {
        currentNumber.innerText += 3;
        // num1.push(3);
        // console.log (num1);
    } );
    
    numberFour.addEventListener("click", () => {
        currentNumber.innerText += 4;
        // num1.push(4);
        // console.log (num1);
    } );
    
    numberFive.addEventListener("click", () => {
        currentNumber.innerText += 5;
        // num1.push(5);
        // console.log (num1);
    } );
    
    numberSix.addEventListener("click", () => {
        currentNumber.innerText += 6;
        // num1.push(6);
        // console.log (num1);
    } );
    
    numberSeven.addEventListener("click", () => {
        currentNumber.innerText += 7;
        // num1.push(7);
        // console.log (num1);
    } );
    
    numberEight.addEventListener("click", () => {
        currentNumber.innerText += 8;
        // num1.push(8);
        // console.log (num1);
    } );
    
    numberNine.addEventListener("click", () => {
        currentNumber.innerText += 9;
        // num1.push(9);
        // console.log (num1);
    } );
    
    numberZero.addEventListener("click", () => {
        currentNumber.innerText += 0;
        // num1.push(0);
        // console.log (num1);
    } );
    
    numberDecimal.addEventListener("click", () => {
        currentNumber = parseFloat(currentNumber);
        if ((currentNumber - Math.floor(currentNumber)) == 0) {
            currentNumber.innerText += ".";
        };
    } );    
};

calculator();


// entryButtons.addEventListener ("click", () => {
//     if(entryButtons.child === addNumber) 
//         {
//         console.log("i got here");
//     }

addNumber.addEventListener("click", () => {

    num1 = parseFloat (currentNumber.innerText);
    currentNumber.innerText = "";
    previousNumber.innerText = num1 + " " + "+";
    totalNum = num1 + num2;
    num2 = num1;
    num1 = 0;
    console.log (totalNum);
    
} );



subtractNumber.addEventListener("click", () => {

    num1 = parseFloat (currentNumber.innerText);
    currentNumber.innerText = "";
    previousNumber.innerText = num1 + " " + "-";
    totalNum = num2 - num1;
    num2 = num1;
    num1 = 0;
    console.log (totalNum);

} );

divideNumber.addEventListener("click", () => {

    num1 = parseFloat (currentNumber.innerText);
    currentNumber.innerText = "";
    previousNumber.innerText = num1 + " " + "/";
    totalNum = num2 / num1;
    num2 = num1;
    num1 = 0;
    console.log (totalNum)


} );

multiplyNumber.addEventListener("click", () => {

    num1 = parseFloat (currentNumber.innerText);
    currentNumber.innerText = "";
    previousNumber.innerText = num1 + " " + "*";
    totalNum = num2 * num1;
    num2 = num1;
    num1 = 0;
    console.log (totalNum)

} );

percentNumber.addEventListener("click", () => {

    num1 = parseFloat (currentNumber.innerText);
    currentNumber.innerText = "";
    previousNumber.innerText = num1 + " " + "%";
    totalNum = num2 % num1;
    num2 = num1;
    num1 = 0;
    console.log (totalNum)


} );


numberEqual.addEventListener("click", () => {
    console.log (totalNum);
    // currentNumber.innerText = totalNum;
} );


// entryButton.addEventListener("click", function() {

    // console.log(currentNumber.value);
//     console.log(numberTwo.value);
//     console.log(percentNumber.value);
      
// });


/*

entered numbers to be saved in currentNumber
add event listener for operations
click => function
if add clicked =>  go to add function
if subtract clicked => go to subtract function
if multiply clicked => go to multiply function
if divide clicked => go to divide function
if equal clicked => go to equal function



*/