class Node {
    constructor() {
        this.data = data;
        this.next = null;
        this.pre = null;
    }
}
class DoubleLinkList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.pre = null;

    }
    append(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let curr_node = this.head;
            let pre_node;
            while (curr_node && curr_node.next) {
                curr_node = curr_node.next;
                pre_node = curr_node;
            }
            curr_node.next = node;
            this.pre = pre_node;
        }
        this.length++;
    }
    insert() {

    }
    remove() {

    }
}
let doubleLinkList = new DoubleLinkList();
doubleLinkList.append(1)
doubleLinkList.append(2)
doubleLinkList.append(3)
console.log(doubleLinkList)