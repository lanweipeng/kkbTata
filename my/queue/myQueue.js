class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item)
    }
    dequeue() {
        return this.items.shift();
    }
    print() {
        console.log(this.items)
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    head() {
        return this.items[0];
    }
    tail() {
        return this.items[this.items.length - 1];
    }
}
exports.Queue = Queue;