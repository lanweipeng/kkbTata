BinaryTree = require('./BinaryTree');
let bt = new BinaryTree.BinaryTree();
bt.init_tree('A(B(D,E(G,)),C(,F))');
let root_node = bt.get_root();
let mirror = (node) => {

}
mirror(root_node);
bt.in_order(root_node)