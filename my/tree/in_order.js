BinaryTree = require('./BinaryTree');
Stack = require('../stack/myStack')
var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))");

var root_node = bt.get_root();
// bt.pre_order(root_node);
function pre_order(node) {
    let stack = new Stack.Stack();
    let curr_node = node;
    while (true) {
        while (curr_node) {
            stack.push(curr_node);
            curr_node = curr_node.leftChild;

        }
        let pop_item = stack.pop();
        console.log(pop_item.data);
        curr_node = pop_item.rightChild;
        if (!curr_node && stack.isEmpty()) {
            break;
        }

    }
};


pre_order(root_node);