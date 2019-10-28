Stack = require('./myStack');
class MinStack {
    constructor() {
        this.data_stack = new Stack.Stack();
        this.min_stack = new Stack.Stack();
    }
    push(item) {
        this.data_stack.push(item);
        if (this.min_stack.isEmpty() || this.min_stack.top() > item) {
            this.min_stack.push(item)
        } else {
            this.min_stack.push(this.min_stack.top())

        }
    }
    pop() {
        this.data_stack.pop();
        this.min_stack.pop();
    }
    min() {
        return this.min_stack.top();
    }
}



minstack = new MinStack();

minstack.push(3);
minstack.push(6);
minstack.push(8);
console.log(minstack.min());
minstack.push(2);
console.log(minstack.min());
minstack.pop();
console.log(minstack.min());