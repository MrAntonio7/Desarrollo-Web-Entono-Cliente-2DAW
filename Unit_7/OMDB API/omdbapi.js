class Pelicula {
    constructor(title, year, imdbID, poster) {
        this.title = title;
        this.year = year;
        this.id = imdbID;
        this.poster = poster;
    }

    ampliarInformacion(released, runtime, genre, director, actors, plot) {
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
        this.busqueda = this.vista.busqueda;
        this.consultar();
        this.cargar(this.busqueda);
        this.vista.offLoading();
        this.portada = true;
    }
    consultar() {
        var self = this;
        $("input").keypress(function(e) {
            if (e.which == 13) {
                self.paginas = 1;
                self.busqueda = self.vista.busqueda;
                $(".my-4").text("Search: " + self.busqueda);
                self.cargar(self.busqueda);
            }
        });
        $("input").focus(function() { $(this).val(""); });
    }

    scroll() {
        console.log('true');
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
        this.paginas = 1;
        this.coleccion = [];
        var self = this;
        this.vista.onLoading();
        url = "https://www.omdbapi.com/?s=" + url + "&type=movie&apikey=d30cfcf0";
        $.ajax({
            url: url,
            dataType: 'json',
            success: function(response) {
                if ((response.Response).toLowerCase() && response.totalResults > 0) {

                    self.scroll();
                    self.guardarPelis(response.Search);
                    self.maquetarPelis();
                    self.scroll();
                    self.paginas += 1;
                    console.log(self.coleccion);
                    self.abrirInformacion();
                    self.vista.offLoading();
                } else { self.vista.noresultados(); }
            },
            timeout: 5000
        });
    }

    cargarMas(url, pag) {
        if (this.portada) {
            var self = this;
            $(window).unbind("scroll");
            this.vista.onLoading();
            setTimeout(function() {
                self.vista.onLoading();
                url = "https://www.omdbapi.com/?s=" + url + "&page=" + pag + "&type=movie&apikey=d30cfcf0";
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
                                self.abrirInformacion();
                            }
                        }

                    },
                    timeout: 5000
                });
                self.scroll();
                self.vista.offLoading();
            }, 1500);
        }
    }

    cargarInformacion(id, pelicula) {
        $(".row").empty();
        $.ajax().abort();
        this.coleccion = [];
        var self = this;
        this.vista.onLoading();
        setTimeout(function() {
            var url = "https://www.omdbapi.com/?i=" + id + "&plot=full&apikey=d30cfcf0";
            $.ajax({
                url: url,
                dataType: 'json',
                success: function(response) {
                    if ((response.Response).toLowerCase()) {
                        $(window).unbind("scroll");
                        self.vista.hideLoading();
                        self.paginas = 1;
                        pelicula.ampliarInformacion(response.Released, response.Runtime, response.Genre, response.Director, response.Actors, response.Plot);
                        self.vista.abrirPeli(pelicula.title, pelicula.poster, pelicula.plot, pelicula.released, pelicula.runtime, pelicula.genre, pelicula.director, pelicula.actors);
                        $(".btn").on("click", function() {
                            $(".row").empty();
                            self.cargar(self.busqueda);
                        });
                    }
                }
            });

        }, 3000);
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

    abrirInformacion() {
        var self = this;
        $(".titulo").on("click", function() {
            for (let i = 0; i < self.coleccion.length; i++) {
                if ($(this).text() == self.coleccion[i].title) {
                    console.table(self.coleccion[i]);
                    $(window).unbind("scroll");
                    self.cargarInformacion(self.coleccion[i].id, self.coleccion[i]);
                }
            }
        })
    }
}

class Vista {
    constructor() {
        $("input").val("Batman");
        this.busqueda = $("input").val();
        $(".my-4").text("Search: " + this.busqueda);
    }

    anadirPeli(title, year, poster) {
        if (poster == "N/A") {
            poster = "caratula.jpg";
        }
        $(".row").append("<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'><div class='card h-100'><a href='#'><img class='card-img-top' src=" + poster + " alt=''></a><div class='card-body'><h4 class='card-title'><a class='titulo' href='#'>" + title + "</a></h4><p class='card-text'>" + year + "</p></div></div></div>");
    }

    onLoading() {
        $('#loading').fadeIn();
    }

    offLoading() {
        $('#loading').fadeOut();
    }

    hideLoading() {
        $('#loading').hide();
    }

    abrirPeli(titulo, poster, plot, realesed, runtime, genre, director, actors) {
        $(window).unbind("scroll");
        $(".row").empty();
        $(".row").append("<div class='col-md-4'> <img class='img-fluid' src=" + poster + " alt=''></div><div class='col-md-8'><h3 class='my-3'>" + titulo + "</h3><p>" + plot + "</p><h3 class='my-3'>Detalles</h3><ul><li>" + realesed + "</li><li>" + runtime + "</li><li>" + genre + "</li><li>" + director + "</li><li> " + actors + "</li></ul></div><button type='button' class='btn btn-block btn-outline-danger'>Back</button>");
    }

    noresultados() {
        $(".my-4").text("Search: No results");
    }
}

$(document).ready(function() {
    var controller = new Controlador();
});