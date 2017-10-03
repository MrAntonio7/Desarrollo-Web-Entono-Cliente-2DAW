//var x = navigator.appVersion
function n (){
document.write('<table>')
for (let x in navigator){
document.write('<tr>')
document.write('<td> navigator.' + x + '</td>')
document.write('<td>' + navigator[x]  + '</td>')
document.write('</tr>')
}
document.write('</table>')
}
n()
