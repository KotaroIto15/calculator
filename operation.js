function applyOperation(op1, op2, operator) {
    let num1 = parseInt(op1);
    let num2 = parseInt(op2);

    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return (num2 === 0) ? num1 : num1 / num2;
    }

    return NaN;
}

let o1 = document.getElementById("operand1");
let o2 = document.getElementById("operand2");
let answer = document.getElementById("answer");

let opButtons = document.querySelectorAll(".operator-btn");

opButtons.forEach(function(button){
    button.addEventListener("click", function(){
        answer.value = applyOperation(o1.value, o2.value, button.innerHTML);
    });
});