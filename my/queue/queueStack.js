Queue = require('./myQueue');

class QueueStack {
    constructor() {
        this.data_queue = new Queue.Queue();
        this.empty_queue = new Queue.Queue();
    }
    push(item) {
        this.data_queue.enqueue(item)
    }
    pop() {
        while (this.data_queue.size() != 1) {
            this.empty_queue.enqueue(this.data_queue.dequeue())
        }
        let item = this.data_queue.dequeue();
        while (!this.empty_queue.isEmpty()) {
            this.data_queue.enqueue(this.empty_queue.dequeue());
        }
        return item;
    }
    top() {
        return this.data_queue.tail();
    }
};


var q_stack = new QueueStack();
q_stack.push(1);
q_stack.push(2);
q_stack.push(4);
console.log(q_stack.top()); // 栈顶是 4
console.log(q_stack.pop()); // 移除 4
console.log(q_stack.top()); // 栈顶变成 2
console.log(q_stack.pop()); // 移除 2
console.log(q_stack.pop()); // 移除 2
// 4
// 4
// 2
// 2
// 1