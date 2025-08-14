Highcharts.chart('grafico-bar_animais', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Censo 2025: Animais domésticos'
    },
    subtitle: {
        text:
            'Quantidade de pessoas entrevistadas sobre a posse de animais domésticos, por categoria, nos domicílios que aceitaram responder ao Censo.'
    },
    xAxis: {
        categories: ['Censo 2025'],
        crosshair: true,
        accessibility: {
            description: 'Ano do censo'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'pessoas'
        }
    },
    tooltip: {
        valueSuffix: ' pessoas'
    },plotOptions: {
            column: {
                innerSize: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br>{point.y}'
                },
                showInLegend: true
            }
        },
    series: [
        {
            name: 'Gatos',
            data: [1310]
        },
        {
            name: 'Cães',
            data: [2267]
        },{
            name: 'Porcos',
            data: [214]
        },
        {
            name: 'Galos e galinhas',
            data: [4805]
        },
        {
            name: 'Outras espécies',
            data: [3170],
            color: '#808080'
        }
    ]
});
