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
print(node1)

// print(reverse_iter(node1))
print(reverse_digui(node1))

function print(node) {
    var curr_node = node;
    while (curr_node) {
        console.log(curr_node.data);
        curr_node = curr_node.next;
    }
};

// 迭代翻转
function reverse_iter(head) {
    if (!head) {
        return null;
    }
    let pre_node = null;
    let curr_node = head;
    while (curr_node) {
        let next_node = curr_node.next;
        curr_node.next = pre_node;
        pre_node = curr_node;
        curr_node = next_node;
    }
    return pre_node;

};
// 递归翻转
function reverse_digui(head) {
    if (!head) {
        return null;
    }
    if (head.next == null) {
        return head;
    }
    var new_head = reverse_digui(head.next);
    head.next.next = head;
    head.next = null;

    return new_head;
}