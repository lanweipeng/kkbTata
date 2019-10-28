Stack = require('./myStack')
    /**
     * Created by kwsy on 2018/8/25.
     * 判断字符串里的括号是否合法
     * "sdf(ds(ew(we)rw)rwqq)qwewe"  合法
     * "(sd(qwqw)sd(sd))"    合法
     * "()()sd()(sd()fw))("  不合法
     */

function isHeFa(string) {
    let stack = new Stack.Stack();
    string.split('').forEach(element => {
        if (element == '(') {
            stack.push('(')
        } else if (element == ')') {
            stack.pop()
        }
    });
    return stack.isEmpty()

}
console.log(isHeFa('sdf(ds(ew(we)rw)rwqq)qwewe'))
console.log(isHeFa('(sd(q)sd(sd))'))
console.log(isHeFa('()()sd()sf))('))