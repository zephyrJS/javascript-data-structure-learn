class Node {
    constructor(item) {
        this.element = item
        this.next = null
    }
}

class LList {
    constructor() {
        this.head = new Node('head')
        this.currentNode = this.head
    }
    find(item) {
        let currentNode = this.head
        while (currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(newElement, element) {
        let newNode = new Node(newElement)
        let node = this.find(element)
        newNode.next = node.next
        node.next = newNode
    }
    findPrev(item) {
        let node = this.head
        while (node.next !== null &&
            node.next.element !== item) {
            node = node.next
        }
        return node
    }
    remove(item) {
        const preNode = this.findPrev(item)
        if (!(preNode.next === null)) {
            preNode.next = preNode.next.next
        }
    }
    display() {
        let currentItem = this.head
        while (!(currentItem.next === null)) {
            console.log(currentItem.next.element)
            currentItem = currentItem.next
        }
    }
    advance(n) {
        while (n > 0 && !(this.currentNode.next === null)) {
            this.currentNode = this.currentNode.next
            n--
        }
    }
    back(n) {
        while (n > 0) {
            this.currentNode = this.findPrev(this.currentNode.element)
            n--;
        }
    }
    show() {
        console.log(this.currentNode.element)
    }
}

const llist = new LList()
llist.insert('a', 'head')
llist.insert('b', 'a')
llist.insert('c', 'b')
llist.remove('b')
llist.advance(2)
llist.back(2)
llist.show()

llist.display()