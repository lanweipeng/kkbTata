Stack = require('./myStack');
let pri = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
}

function infix_exp_2_postfix_exp(exp) {
    let stack = new Stack.Stack();
    let arr = [];
    exp.forEach(element => {
        if (!isNaN(element)) {
            arr.push(element)
        } else if (element == '(') {
            stack.push(element)
        } else if (element == ')') {
            while (stack.top() != '(') {
                arr.push(stack.pop())
            }
            stack.pop();
        } else {
            while (!stack.isEmpty() && ['*', '+', '-', '/'].indexOf(stack.top()) >= 0 && pri[element] <= pri[stack.top()]) {
                arr.push(stack.pop())
            }
            stack.push(element);
        }
    });
    while (!stack.isEmpty()) {
        arr.push(stack.pop())
    }
    return arr
}
console.log(infix_exp_2_postfix_exp(["12", "+", "3"]))
    // 2-3+2
console.log(infix_exp_2_postfix_exp(["2", "-", "3", "+", "2"]))
    // (1+(4+5+3)-3)+(9+8)
var exp = ["(", "1", "+", "(", "4", "+", "5", "+", "3", ")", "-", "3", ")", "+", "(", "9", "+", "8", ")"];
console.log(infix_exp_2_postfix_exp(exp))

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
console.log(infix_exp_2_postfix_exp(exp))

console.log(infix_exp_2_postfix_exp(["12", "+", "3", "*", "5"]))
console.log(infix_exp_2_postfix_exp(["12", "*", "3", "+", "5"]))