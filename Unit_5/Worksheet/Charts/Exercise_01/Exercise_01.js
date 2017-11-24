google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Partidos', 'Escaños'],
        ['PP', 137],
        ['PSOE', 85],
        ['PODEMOS', 71],
        ['CIUDADANOS', 32],
        ['ERC-CATSI', 9],
        ['CDC', 8],
        ['PNV', 5],
        ['EH BIULDU', 2],
        ['CCA-PNC', 1]
    ]);

    var options = {
        title: 'Elecciones generales 2016',
        animation: {
            duration: 1000,
            startup: true
        },
        colors: ['#3570C2', '#EF2B24', '#9B3CC7', '#EC8321', '#ECE81C', '#312AF3', '#03A311', '#76E409', '#010727']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
    var counter = 0;

    var handler = setInterval(function() {
        counter = counter + 0.1;
        options = {
            title: 'Elecciones generales 2016',
            slices: {
                0: { offset: counter },
                1: { offset: counter },
                2: { offset: counter },
            },
            colors: ['#3570C2', '#EF2B24', '#9B3CC7', '#EC8321', '#ECE81C', '#312AF3', '#03A311', '#76E409', '#010727']
        };
        chart.draw(data, options);

        if (counter > 0.3) clearInterval(handler);
    }, 200);
}