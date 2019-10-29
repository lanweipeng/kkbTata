Stack = require('./linkStack')
    /**
     * 实现calc_exp函数,计算逆波兰表达式
     * ["4", "13", "5", "/", "+"] 等价于(4 + (13 / 5)) = 6
     * ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
     * 等价于((10 * (6 / ((9 + 3) * -11))) + 17) + 5
     */
    // function calc_exp(exp) {
    //     let stack = new Stack.Stack();
    //     exp.forEach(element => {
    //         if (['*', '+', '-', '/'].indexOf(element) >= 0) {
    //             let value_1 = stack.pop();
    //             let value_2 = stack.pop();
    //             stack.push(parseInt(eval(`${value_2}${element}${value_1}`)));
    //         } else {
    //             stack.push(element)
    //         }
    //     });
    //     return stack.pop()
    // }
function calc_exp(exp) {
    let stack = new Stack.Stack();
    exp.forEach(element => {
        if (!isNaN(element)) {
            stack.push(element)
        } else if (['/', '+', '-', '*'].indexOf(element) >= 0) {
            let value_1 = stack.pop();
            let value_2 = stack.pop();
            stack.push(parseInt(eval(`${value_2}${element}${value_1}`)))
        }
    });
    return stack.top();
}
var exp_1 = ["4", "13", "5", "/", "+"];
var exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
var exp_3 = ['1', '4', '5', '+', '3', '+', '+', '3', '-', '9', '8', '+', '+'];
console.log(calc_exp(exp_1));
console.log(calc_exp(exp_2));
console.log(calc_exp(exp_3));