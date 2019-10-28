class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkList {
    constructor() {

        this.length_attr = 0;
        this.head_attr = null;
        this.tail_attr = null;
    }
    append(item) {
        let node = new Node(item);
        if (this.head_attr == null) {
            this.head_attr = node;
            this.tail_attr = this.head_attr;
        } else {
            this.tail_attr.next = node;
            this.tail_attr = node;
        }
        this.length_attr++;
        return true;
    }
    insert(index, item) {
        if (index < 0 || index > this.length_attr) {
            throw "您输入的位置有误";
        }
        let curr_node = new Node(item);
        this.length_attr++;
        if (index == 0) {
            curr_node.next = this.head_attr;

            this.head_attr = curr_node;
        } else if (index == this.length_attr) {
            this.append(item)
        } else {
            let i = 0;
            let pre_node = this.get(index - 1);
            curr_node.next = pre_node.next;

            pre_node.next = curr_node;
        }

    }
    remove(index) {
        if (index < 0 || index > this.length_attr) {
            throw "您输入的位置有误";
        } else {
            if (index == 0) {
                this.remove_head();
            } else if (index == this.length_attr) {
                this.remove_tail();
            } else {
                let pre = this.get(index - 1);
                let curr_node = pre.next;
                pre.next = curr_node.next;
                this.length_attr--;
            }
        }
    }
    remove_head() {
        // let curr_node = this.head_attr;
        // console.log(curr_node)
        this.head_attr = this.head_attr.next;
        this.length_attr--;
        // this.head_attr.next = curr_node.next;
    }
    remove_tail() {
        this.length_attr--;

        if (this.length_attr == 0) {
            this.head_attr = null;
            this.tail_attr = null;
        } else {
            let pre = this.get(this.length_attr - 1);
            this.tail_attr = pre;
            pre.next = null;
        }

    }
    indexOf(item) {
        let index = 0;
        let curr_node = this.head_attr;
        // console.log(curr_node)
        while (curr_node.next != null) {
            if (curr_node.data != item) {

            }
            curr_node = curr_node.next;
            index++;
        }
        if (index == this.length_attr) {
            return -1
        }
        return index;
    }
    get(index) {
        if (index < 0 || index > this.length_attr - 1) {
            throw "您输入的位置有误";
        }
        let curr_node = this.head_attr;
        // console.log(curr_node)
        while (index >= 1 && curr_node.next != null) {
            curr_node = curr_node.next;
            index--;
        }
        return curr_node;
    }
    head() {
        return this.head_attr;
    }

    tail() {
        let curr_node = this.head_attr;
        while (curr_node.next != null) {
            curr_node = curr_node.next;
        }
        return curr_node.data;
    }
    length() {
        return this.length_attr;
    }
    isEmpty() {
        return this.length_attr == 0;
    }
    clear() {
        this.head_attr = null;
        this.tail_attr = null;
        this.length_attr = 0;
    }
    print() {
        let curr_node = this.head_attr;
        let str_link = "";
        while (curr_node) {
            str_link += `${curr_node.data.toString()} -> `;

            curr_node = curr_node.next;
        }
        str_link += 'null'
        console.log(str_link)
    }
}
let linklist = new LinkList();
// linklist.append(2)
// linklist.append(3)
// console.log(linklist.indexOf(8))
// linklist.remove_head();
// linklist.print()
// linklist.remove_tail();
// linklist.print()
// console.log(linklist.get(1))
// linklist.insert(3, 9);
// linklist.print();
// linklist.remove(1);
// linklist.print()
// console.log(linklist.length())
exports.LinkList = LinkList;