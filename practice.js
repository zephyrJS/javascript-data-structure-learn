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
