const obj = {
  a: 1
}

let Target = null
const Dep = []
Object.defineProperty(obj, 'a', {
  set(newVal) {
    Dep.forEach(fn => fn())
    return newVal
  },
  get() {
    Dep.push(Target)
    return 'back data'
  }
})

function $watch(val, fn) {
  Target = fn
  obj[val]
}

$watch('a', () => { console.log('watch a property') })
// console.log(obj.a)
obj.a = 2