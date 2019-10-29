Queue = require('./myQueue');

// function fibonacci(n) {
//     if (n < 1) {
//         return;
//     }
//     let queue = new Queue.Queue();
//     queue.enqueue(1);
//     queue.enqueue(1);
//     let index = 0;
//     while (index < n - 2) {
//         let item = queue.dequeue();
//         queue.enqueue(item + queue.head());
//         index++;
//     }
//     queue.dequeue();
//     return queue.head();
// }
function fibonacci(n) {
    let queue = new Queue.Queue();
    queue.enqueue(1);
    queue.enqueue(1);
    let index = 0;
    while (n - 2 > index) {
        let item = queue.dequeue();
        queue.enqueue(item + queue.head())
        index++;
    }
    queue.dequeue();
    return queue.head();
}
console.log(fibonacci(4))