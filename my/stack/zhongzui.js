Stack = require('./mystack.js')

priaty_map = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
}

function infix_exp_2_postfix_exp(exp) {
    let arr = [];
    let stack = new Stack.Stack();
    exp.forEach(item => {
        if (!isNaN(item)) {
            arr.push(item)
        } else if (item == '(') {
            stack.push(item)
        } else if (item == ')') {
            while (stack.top() != '(') {
                arr.push(stack.pop())
            }
            stack.pop();
        } else {
            while (!stack.isEmpty() && ['*', '+', '/', '-'].indexOf(stack.top()) >= 0 && priaty_map[item] <= priaty_map[stack.top()]) {
                arr.push(stack.pop())
            }
            stack.push(item)
        }
    });
    while (!stack.isEmpty()) {
        arr.push(stack.pop())
    }
    return arr;
}
// 12+3
console.log(infix_exp_2_postfix_exp(["12", "+", "3"]))
    // 2-3+2
console.log(infix_exp_2_postfix_exp(["2", "-", "3", "+", "2"]))
    // (1+(4+5+3)-3)+(9+8)
var exp = ["(", "1", "+", "(", "4", "+", "5", "+", "3", ")", "-", "3", ")", "+", "(", "9", "+", "8", ")"];
console.log(infix_exp_2_postfix_exp(exp))

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
console.log(exp.join(''))
console.log(infix_exp_2_postfix_exp(exp))

console.log(infix_exp_2_postfix_exp(["12", "+", "3", "*", "5"]))
console.log(infix_exp_2_postfix_exp(["12", "*", "3", "+", "5"]))