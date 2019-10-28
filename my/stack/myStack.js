class Stack {
    constructor() {
        this.items = [];

    }
    push(item) {
        if (item instanceof Array) {
            item.forEach(element => {
                this.items.push(element)
            });
        } else
            this.items.push(item)
    }
    pop() {
        return this.items.pop();
    }
    print() {
        console.log(this.items)
    }
    top() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length == 0
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items.length = 0;
    }
}
exports.Stack = Stack;
// export { Stack }