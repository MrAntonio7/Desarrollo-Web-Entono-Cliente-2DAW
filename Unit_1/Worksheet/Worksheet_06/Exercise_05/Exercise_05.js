function onlyUniques (...a) {
  let n = []
  for (let i = 0; i < a.length; i++) {
    if (!n.includes(a[i])) {
      n.push(a[i])
    }
  }
  return n
}

document.write(onlyUniques('cat', 2, 'dog', 3, 'cat', 3))
