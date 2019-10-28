Queue = require('./myQueue');


// function yuesefu(arr) {
//     let queue = new Queue.Queue();
//     arr.forEach(element => {
//         queue.enqueue(element)
//     });
//     let index = 0;
//     while (queue.size() != 1) {
//         let item = queue.dequeue();
//         index++;
//         if (index % 3 != 0) {
//             queue.enqueue(item)
//         }
//     }
//     return queue.head();
// }
function yuesefu(arr) {
    let queue = new Queue.Queue();
    arr.forEach(element => {
        queue.enqueue(element)
    });
    let index = 0;
    while (queue.size() > 1) {
        let item = queue.dequeue();
        index++;

        if (index % 3 != 0) {
            queue.enqueue(item);

        }
    }
    return queue.head()
}
let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i;
}
console.log(yuesefu(arr))