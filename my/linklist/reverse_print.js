class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function revease_print(head) {
    if (head == null) {
        return;
    } else {
        revease_print(head.next);
        console.log(head.data)
    }
}
revease_print(node1)