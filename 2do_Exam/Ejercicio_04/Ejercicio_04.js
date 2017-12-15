google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawColColors);

function drawColColors() {
    var data = new google.visualization.arrayToDataTable([
        ['Año', 'Población', { role: 'style' }],
        ["2011", 1452, 'fill-color:blue; fill-opacity:0.3'],
        ["2012", 2360, 'fill-color:red; fill-opacity:0.5'],
        ["2013", 4021, 'fill-color:orange; fill-opacity:0.7'],
        ["2014", 1300, 'fill-color:purple; fill-opacity:0.2']
    ]);

    var options = {
        title: 'Evolución de la población zurda de Badajoz',
        width: 600,
        backgroundColor: "#CACACA",
        animation: {
            duration: 6000,
            easing: 'out',
            startup: true
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};