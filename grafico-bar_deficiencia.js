Highcharts.chart('grafico-bar_deficiencia', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Censo 2025: Pessoas com algum tipo de deficiência'
    },
    subtitle: {
        text:
            'Quantidade de pessoas entrevistadas com algum tipo de deficiência, por categoria, nos domicílios que aceitaram responder ao Censo.'
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
            name: 'Auditivo',
            data: [194]
        },
        {
            name: 'Visual',
            data: [418]
        },{
            name: 'Intelectual',
            data: [144]
        },
        {
            name: 'Dois ou três tipos anteriores',
            data: [129]
        },
        {
            name: 'Algum tipo de deficiência',
            data: [554],
            color: '#808080'
        }
    ]
});
