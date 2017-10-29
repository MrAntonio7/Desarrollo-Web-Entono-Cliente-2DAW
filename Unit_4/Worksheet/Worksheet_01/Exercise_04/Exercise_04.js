function pintarTabla(n) {
    document.write("<table border='5' cellspacing='0' align='center'>");
    for (var i = 0; i <= n; i++) {
        document.write("<tr bgcolor='#FFFFFF' height='20'>");
        for (var j = 0; j <= n; j++) {
            document.write("<td onmousemove='Color(this)' align='center' width='20' height='20'></td>");
        };
    };
    document.write("</tr>");
    document.write("</table>");
};

function Color(valor) {
    if (event.shiftKey == true) {
        valor.style.backgroundColor = "Blue";
    }
    else if (event.ctrlKey == true) {
        valor.style.backgroundColor = "Red";
    }
}
