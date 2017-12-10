function whatsapp() {
    var d = document.getElementsByTagName('div')[0];
    d.textContent = "escribiendo...";
    setTimeout(function() {
        d.textContent = '';
    }, 3000);
}