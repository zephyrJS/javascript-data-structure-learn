// sort odd array
// 你有一组数字。
// 你的任务是排序上升的奇数，但偶数必须在他们的位置。
// 零不是奇数，你不需要移动它。如果您有一个空数组，则需要返回它。
function sortArray(array) {
  const indices = []
  array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => (array[indices[i]] = v))
  return array
}

function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b)
  return array.map(x => (x % 2 ? odd.shift() : x))
}

// Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  return names
    .map(v => v.name)
    .join(', ')
    .replace(/, ([^, ]*)$/, ' & ' + '$1')
}

// who likes this
function likes(names) {
  var templates = ['no one likes this', '{name} likes this', '{name} and {name} like this', '{name}, {name} and {name} like this', '{name}, {name} and {n} others like this']
  var idx = Math.min(names.length, 4)

  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === '{name}' ? names.shift() : names.length
  })
}

// Bounce ball
function bouncingBall(h, bounce, window) {
  let seen = -1
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      h *= bounce
      seen += 2
    }
  }
  return seen
}

// Yours order, please
// order("is2 Thi1s T4est 3a") => "Thi1s is2 3a T4est"
function order(words) {
  return words.split(' ').sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/)
  }).join(' ')
}

// Tribonacci Sequence
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

// triple trouble
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}

// What's a Perfect Power anyway
var isPP = function(n){
  for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
    var k = Math.round(Math.log(n) / Math.log(m))
    if (Math.pow(m, k) == n) return [m, k];
  }
  return null;
}