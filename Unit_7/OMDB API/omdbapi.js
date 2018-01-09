class Pelicula {
    constructor(title, year, imdbID, poster) {
        this.title = title;
        this.year = year;
        this.id = imdbID;
        this.poster = poster;
    }
    informacion(released, runtime, genre, director, actors, plot) {
        this.released = released;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
        this.actors = actors;
        this.plot = plot;
    }
}

class Controlador {
    constructor() {
        this.vista = new Vista();
        this.coleccion = [];
        this.paginas = 1;
        $("input").val("Batman");
        this.busqueda = $("input").val();
        $(".my-4").text("Busqueda: " + this.busqueda);
        this.consultar();
        this.scroll();
        this.cargar(this.busqueda);
        $('#loading').hide();

    }
    consultar() {
        var self = this;
        $("input").keypress(function(e) {
            if (e.which == 13) {
                self.paginas = 1;
                self.busqueda = $("input").val();
                $(".my-4").text("Busqueda: " + self.busqueda);
                self.cargar(self.busqueda);
            }
        });
    }

    scroll() {
        var self = this;
        var win = $(window);

        win.scroll(function() {

            if ($(document).height() - win.height() <= win.scrollTop()) {
                self.cargarMas(self.busqueda, self.paginas);
            }
        });
    }
    cargar(url) {

        $(".row").empty();
        this.coleccion = [];
        var self = this;
        url = "http://www.omdbapi.com/?s=" + url + "&type=movie&apikey=d30cfcf0";

        $.ajax({
            url: url,
            dataType: 'json',
            success: function(response) {
                if ((response.Response).toLowerCase()) {
                    self.guardarPelis(response.Search);
                    self.maquetarPelis();
                    self.paginas += 1;
                    console.log(self.coleccion);
                }
            }
        });
    }
    cargarMas(url, pag) {
        var self = this;
        self.vista.onLoading();
        setTimeout(function() {
            self.vista.onLoading();
            url = "http://www.omdbapi.com/?s=" + url + "&page=" + pag + "&type=movie&apikey=d30cfcf0";
            $.ajax({
                url: url,
                dataType: 'json',
                success: function(response) {
                    if ((response.Response).toLowerCase()) {
                        var inicio = self.coleccion.length;
                        if (response.totalResults > 0) {
                            self.guardarPelis(response.Search);
                            self.maquetarPelis(inicio);
                            self.paginas += 1;
                            console.log(self.coleccion);
                        }
                    }

                }
            });
            self.vista.offLoading();
        }, 1500);


    }

    guardarPelis(arrayPelis) {
        for (var i = 0; i < arrayPelis.length; i++) {
            var peli = new Pelicula(arrayPelis[i].Title, arrayPelis[i].Year, arrayPelis[i].imdbID, arrayPelis[i].Poster);
            this.coleccion.push(peli);
        }
    }

    maquetarPelis(n = 0) {
        for (var i = n; i < this.coleccion.length; i++) {
            this.vista.anadirPeli(this.coleccion[i].title, this.coleccion[i].year, this.coleccion[i].poster);
        }
    }

}

class Vista {
    constructor() {
        // 
    }

    anadirPeli(title, year, poster) {
        if (poster == "N/A") {
            poster = "caratula.jpg";
        }
        $(".row").append("<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'><div class='card h-100'><a href='#'><img class='card-img-top' src=" + poster + " alt=''></a><div class='card-body'><h4 class='card-title'><a href='#'>" + title + "</a></h4><p class='card-text'>" + year + "</p></div></div></div>");
    }

    onLoading() {
        $('#loading').show();

    }

    offLoading() {
        $('#loading').hide();
    }
}

$(document).ready(function() {
    var controller = new Controlador();
});