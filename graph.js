class Vertex {
  constructor(label) {
    this.label = label
    this.wasVisited = false
  }
}

class Graph {
  constructor(v) {
    this.vertices = v
    this.edges = 0
    this.adj = []
    for(var i = 0; i < this.vertices; i++) {
      this.adj[i] = []
      this.adj[i].push('')
    }
  }
  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
  }
  showGraph() {
    for(let i = 0; i < this.vertices; i++) {
      let value = `${i} => `
      for(let j = 0; j < this.vertices; j++) {
        if(this.adj[i][j] !== undefined) {
          value += `${this.adj[i][j]} `
        }
      }
      console.log(value)
    }
  }
}

g = new Graph(5)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.showGraph()