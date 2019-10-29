BinaryTree = require('./BinaryTree');
Stack = require('../stack/myStack')
var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))");

var root_node = bt.get_root();
// bt.pre_order(root_node);
let Tag = function (node, state) {
    this.node = node;
    this.state = state;
}
function pre_order(node) {
    var stack = new Stack.Stack();
    var curr_node = node;
    while (true) {
        while (curr_node) {
            var tag = new Tag(curr_node, 0);
            stack.push(tag);
            curr_node = curr_node.leftChild;
        }

        var pop_item = stack.pop();
        if (pop_item.node.rightChild && pop_item.state == 0) {
            pop_item.state = 1;
            stack.push(pop_item);
            curr_node = pop_item.node.rightChild;
        } else {
            console.log(pop_item.node.data);
        }
        if (!curr_node && stack.isEmpty()) {
            break;
        }
    }
};


pre_order(root_node);