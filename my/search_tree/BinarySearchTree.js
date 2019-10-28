class TreeNode {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
        this.insert_data = function (node, data) {
            if (!this.root) {
                let treeNode = new TreeNode(data);
                this.root = treeNode;
                return true;
            }
            //小
            if (node.data > data) {
                if (node.leftChild) {
                    return this.insert_data(node.leftChild, data);
                } else {
                    let leftChild = new TreeNode(data);
                    node.leftChild = leftChild;
                    leftChild.parent = node;
                    return true;
                }
                //大

            } else if (node.data < data) {
                if (node.rightChild) {
                    return this.insert_data(node.rightChild, data);
                } else {
                    let rightChild = new TreeNode(data);
                    node.rightChild = rightChild;
                    rightChild.parent = node;
                    return true;
                }
                //相等
            } else {
                return false;
            }
        }
        this.search_data = function (node, data) {
            if (!node) {
                return null
            }
            if (node.data == data) {
                return node
            } else if (node.data < data) {

                return this.search_data(node.rightChild, data);

            } else {
                return this.search_data(node.leftChild, data);

            }
        }
    }
    insert(data) {
        return this.insert_data(this.root, data);
    }
    search(data) {
        return this.search_data(this.root, data);
    }
    insertArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
        }
    }
}
let b = new BinarySearchTree();
let arr = [1, 3, 5, 7, 6, 4, 3, 76, 2, 9];
b.insertArr(arr)
console.log(b.search(76))