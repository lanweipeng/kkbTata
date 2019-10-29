Stack = require('./myStack');
class StackQueue {
    constructor() {
        this.state_queue = new Stack.Stack();
        this.empty_queue = new Stack.Stack();
    }
    enqueue(item) {
        this.state_queue.push(item)
    }
    dequeue() {
        while (this.state_queue.size() > 1) {
            this.empty_queue.push(this.state_queue.pop())
        }
        let item = this.state_queue.pop();
        while (!this.empty_queue.isEmpty()) {
            this.state_queue.push(this.empty_queue.pop())
        }
        return item;
    }
    head() {
        while (this.state_queue.size() > 1) {
            this.empty_queue.push(this.state_queue.pop())
        }
        let item = this.state_queue.top();
        this.empty_queue.push(this.state_queue.pop())
        while (!this.empty_queue.isEmpty()) {
            this.state_queue.push(this.empty_queue.pop())
        }
        return item;
    }
}
// let stackQueue = new StackQueue();
var sq = new StackQueue();
sq.enqueue(1);
sq.enqueue(4);
sq.enqueue(8);
console.log(sq.head());
sq.dequeue();
sq.enqueue(9);
console.log(sq.head());
sq.dequeue();
console.log(sq.head());
console.log(sq.dequeue());
console.log(sq.dequeue());