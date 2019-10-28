BinaryTree = require('./BinaryTree');
Stack = require('../stack/myStack')
var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))");

var root_node = bt.get_root();
// bt.pre_order(root_node);
function pre_order(node) {
    let curr_node = node;
    let stack = new Stack.Stack();
    while (curr_node) {
        console.log(curr_node.data);
        if (curr_node.rightChild) {
            stack.push(curr_node.rightChild);
        }
        if (curr_node.leftChild) {
            curr_node = curr_node.leftChild;

        } else {
            curr_node = stack.pop();
        }
    }
};

// A
// D
// B
// G
// E
// C
// F
pre_order(root_node);