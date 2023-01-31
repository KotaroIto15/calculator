function applyOperation(op1, op2, operator) {
    let operand1 = parseInt(op1);
    let operand2 = parseInt(op2);

    switch(operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return (operand2 === 0) ? operand1 : operand1 / operand2;
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
