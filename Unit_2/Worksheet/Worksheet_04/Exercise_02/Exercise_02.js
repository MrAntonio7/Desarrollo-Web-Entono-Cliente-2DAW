function w (){
document.write('<table>')
for (let x in window){
document.write('<tr>')
document.write('<td> window.' + x + '</td>')
document.write('<td>' + window[x]  + '</td>')
document.write('</tr>')
}
document.write('</table>')
}
w()
