class Node {
    constructor(item) {
        this.element = item
        this.next = null
    }
}

class LList {
    constructor() {
        this.head = new Node('head')
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
        while(node.next.element !== null &&
            node.next.element !== item) {
            node = node.next
        }
        return node
    }
    remove(item) {
        const preNode = this.findPrev(item)
        if(!(preNode.next === null)) {
            preNode.next = preNode.next.next
        }
    }
    display() {
        let currentItem = this.head
        while(!(currentItem.next === null)) {
            console.log(currentItem.next.element)
            currentItem = currentItem.next
        }        
    }
}

const llist = new LList()
llist.insert('a', 'head')
llist.insert('b', 'a')
llist.insert('c', 'b')
llist.remove('b')
llist.display()
