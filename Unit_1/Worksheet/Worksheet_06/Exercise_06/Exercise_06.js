function combineAllArrays (a, ...b) {
  return a.concat(...b)
}
var valores1 = ['a', 2, 'b', 3]
var valores2 = ['c', 4, 'd', 5]
var valores3 = ['e', 6, 'f', 7]
document.write(combineAllArrays(valores1, valores2, valores3))
