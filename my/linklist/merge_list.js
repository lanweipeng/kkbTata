var Node = function(data) {
    this.data = data;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(4);
var node3 = new Node(9);
var node4 = new Node(2);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(10);


node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;
node6.next = node7;

function merge_link(head1, head2) {
    //在这里实现你的代码
    if (head1 == null) {
        return head2;
    } else if (head2 == null) {
        return head1
    }
    let curr1 = head1;
    let curr2 = head2;
    let merge_head = null;
    let merge_tail = null;
    while (curr1 && curr2) {
        let min_data;
        if (curr1.data >= curr2.data) {
            min_data = curr2.data;
            curr2 = curr2.next
        } else {
            min_data = curr1.data;
            curr1 = curr1.next;
        }
        if (merge_head == null) {
            merge_head = new Node(min_data);
            merge_tail = merge_head
        } else {
            let new_node = new Node(min_data);
            merge_tail.next = new_node;
            merge_tail = new_node;
        }

    }
    let rest_link = null;
    if (curr1) {
        rest_link = curr1;
    } else {
        rest_link = curr2;
    }
    while (rest_link) {
        let new_node = new Node(rest_link.data);
        merge_tail.next = new_node;
        merge_tail = new_node;
        rest_link = rest_link.next;
    }
    return merge_head;
};

print(merge_link(node1, node4));

function print(node) {
    var curr_node = node;
    while (curr_node) {
        console.log(curr_node.data);
        curr_node = curr_node.next;
    }
};