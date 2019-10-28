Stack = require('../stack/myStack')
class BinaryNode {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
        this.parentNode = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;

        this.tree_node_count = function (node) {
            if (!node) {
                return 0;
            }
            let left_node_count = this.tree_node_count(node.leftChild);
            let right_node_count = this.tree_node_count(node.rightChild);
            return left_node_count + right_node_count + 1;
        }
        this.tree_height = function (node) {
            if (!node) {
                return 0;
            }
            let left_tree_height = this.tree_height(node.leftChild);
            let right_tree_height = this.tree_height(node.rightChild);
            if (left_tree_height > right_tree_height) {
                return left_tree_height + 1;
            } else {
                return right_tree_height + 1;
            }
        }
        this.find_node = (node, data) => {
            if (!node) {
                return;
            }
            if (node.data === data) {
                return node;
            }
            let left_res = this.find_node(node.leftChild, data);
            if (left_res) {
                return left_res;
            }
            return this.find_node(node.rightChild, data)

        }
    }
    get_root() {
        return this.root;
    }
    init_tree(string) {
        let stack = new Stack.Stack();
        let k = 0;
        let new_node = null;
        for (let i = 0; i < string.length; i++) {
            let item = string[i];
            if (item === '(') {
                stack.push(new_node)
                k = 1;
            } else if (item === ')') {
                stack.pop();
            } else if (item == ',') {
                k = 2;

            } else {
                new_node = new BinaryNode(item);
                if (this.root == null) {
                    this.root = new_node;
                } else if (k == 1) {
                    let top_item = stack.top();
                    top_item.leftChild = new_node;
                    new_node.parentNode = top_item;
                } else if (k == 2) {
                    let top_item = stack.top();
                    top_item.rightChild = new_node;
                    new_node.parentNode = top_item;
                }
            }
        }
    }
    in_order(node) {
        if (node === null) {
            return;
        }
        this.in_order(node.leftChild);
        console.log(node.data);
        this.in_order(node.rightChild)
    }
    pre_order(node) {
        if (node === null) {
            return;
        }
        console.log(node.data);
        this.in_order(node.leftChild);
        this.in_order(node.rightChild)
    }
    post_order(node) {
        this.in_order(node.leftChild);
        console.log(node.data);
        this.in_order(node.rightChild);
    }
    size() {
        return this.tree_node_count(this.root);
    }
    height() {
        return this.tree_height(this.root);
    }
    find(data) {
        return this.find_node(this.root, data);
    }
}
// let binaryTree = new BinaryTree();
// binaryTree.init_tree('A(B(D,E(G,)),C(,F))');
// binaryTree.in_order(binaryTree.root);
// console.log(binaryTree.size())
// console.log(binaryTree.height())
// console.log(binaryTree.find('A'))
exports.BinaryTree = BinaryTree;