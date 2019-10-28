 LinkList = require('./LinkList')
     // push
     // pop
     // top
     // size
     // isEmpty
     // clear
 class Stack {
     constructor() {
         this.linkList = new LinkList.LinkList();
     }
     push(item) {
         this.linkList.append(item)
     }
     pop() {
         let item = this.linkList.get(this.linkList.length() - 1);
         this.linkList.remove_tail();
         return item.data;
     }
     top() {
         return this.linkList.tail();
     }
     size() {
         return this.linkList.length();
     }
     isEmpty() {
         return this.linkList.length() == 0;
     }
     clear() {
         this.linkList.clear();
     }
 }
 exports.Stack = Stack;
 let stack = new Stack();
 //  stack.push(2);
 //  stack.push(3);
 //  stack.push(4);
 //  console.log(stack.pop())
 //  stack.clear();
 //  console.log(`length: ${stack.size()}`);