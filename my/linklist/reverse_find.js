var Node = function(data) {
    this.data = data;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


function reverse_find(head, k) {
    let step = k;
    let fast = head;
    let slow = head;
    while (fast && step > 0) {
        fast = fast.next;
        step--;
    }

    if (step != 0) {
        return null;
    } else {
        while (fast && slow) {
            fast = fast.next;
            slow = slow.next;
        }
    }
    return slow.data;
};

console.log(reverse_find(node1, 2));