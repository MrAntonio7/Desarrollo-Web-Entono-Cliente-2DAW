function combineTwoArrays (a, b) {
  let a1 = ['cat', 'dog']
  let a2 = ['beard']
  let a3 = [...a1, ...a2]
  return a3
};

document.write(combineTwoArrays())
