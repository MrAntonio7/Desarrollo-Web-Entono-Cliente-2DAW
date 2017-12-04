function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location = this.responseText;
        }
    };
    xhttp.open("GET", "Servidor/Servidor.php", true);
    xhttp.send();
}