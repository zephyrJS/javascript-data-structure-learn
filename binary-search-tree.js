class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
  show() {
    console.log(this.data)
    return this.data
  }
}

// BST 遍历方法：中序、先序和后序遍历
// 中序遍历：按照节点上的键值，以升序访问 BST 上的节点（左、中、右）
// 先序遍历：先访问根节点，然后以相同的方式访问左子树，右子树
// 后序遍历：先访问叶子节点，从左子树到右子树，再到根节点

class BST {
  constructor() {
    this.root = null
  }
  insert(data) {
    const n = new Node(data, null, null)
    if (this.root === null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = n
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = n
            break
          }
        }
      }
    }
  }
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left)
      node.show()
      this.inOrder(node.right)
    }
  }
  preOrder(node) {
    if (node !== null) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      node.show()
    }
  }
  getMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }
  getMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
  find(data) {
    let current = this.root
    while (current !== null) {
      if (data === current.data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }
  getMinNode(node) {
    let current = node
    if(node.left !== null){
      current = node.left
    }
    return current
  }
  remove(data) {
    this.root = this.removeNode(this.root, data)
  }
  // 1. 如果节点不存在，直接返回 null
  // 2. 如果 data 为 root
  // i. 如果左右子节点为null，直接返回 null
  // ii. 如果左子树不存在，直接返回右子树，
  // iii. 如果右子树不存在，直接返回左子树
  // iiii. 如果左右子树存在，取右子树最小值（或左子树最大值）为根节点
  // 3. 如果比 root 值小，选择 root.left 继续 i 到 iiii 步骤
  // 4. 如果比 root 值大，选择 root.right 继续 i 到 iiii 步骤
  removeNode(node, data) {
    if (node === null) {
      return null
    }
    if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null
      }
      if (node.left === null) {
        return node.right
      }
      if(node.right === null) {
        return node.left
      }
      let tempNode = this.getMinNode(node.right)
      node.data = tempNode.data
      node.right = this.removeNode(node.right, tempNode.data)
      return node
    }
    if(data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    }
    if(data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }
}
var nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
// nums.inOrder(nums.root)
// console.log('--------------------')
// nums.preOrder(nums.root)
// console.log('--------------------')
// nums.postOrder(nums.root)
// console.log('--------------------')
// console.log('min：', nums.getMin())
// console.log('--------------------')
// console.log('max：', nums.getMax())
// console.log('--------------------')
// console.log('target', nums.find(2))
// console.log('target', nums.find(3))
// console.log('target', nums.find(23))
// console.log('--------------------')
nums.preOrder(nums.root)
console.log('--------------------')
nums.remove(23)
console.log('--------------------')
nums.preOrder(nums.root)


