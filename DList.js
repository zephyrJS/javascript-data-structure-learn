// 双向链表
class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
}

class DList {
    constructor() {
        this.head = new Node('head')
    }
    find(item) {
        let current = this.head
        while (current.element !== item) {
            current = current.next
        }
        return current
    }
    insert(newItem, item) {
        let newNode = new Node(newItem)
        let node = this.find(item)
        newNode.next = node.next
        newNode.prev = node
        node.next = newNode
    }
    remove(item) {
        let node = this.find(item)
        if (!(node.next === null)) {
            node.prev.next = node.next
            node.next.prev = node.prev
            node.next = null
            node.prev = null
        }
    }
    display() {
        let node = this.head
        while(!(node.next === null)){
            console.log(node.next.element)
            node = node.next
        }
    }
}

const dList = new DList()
dList.insert('a', 'head')
dList.insert('b', 'a')
dList.insert('c', 'b')
dList.display()
