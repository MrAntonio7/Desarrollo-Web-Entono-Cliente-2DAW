    var p = new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve('Encontrado');
            }
            if (this.status == 404) {
                reject('No encotrado');
            }
        };
        xhttp.open("GET", "ajax_infos.txt", true);
        xhttp.send();
    });

    function consume() {
        p
            .then(function(params) {
                console.log(params);
            })
            .catch(function(error) {
                console.log(error);
            });
    }