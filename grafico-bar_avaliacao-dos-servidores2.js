Highcharts.chart('grafico-bar_avaliacao-dos-servidores', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Censo 2025: Avaliação do trabalho dos servidores públicos municipais'
    },
    subtitle: {
        text:
            'Resposta por número de domicílos'
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
            text: 'respostas'
        }
    },
    tooltip: {
        valueSuffix: ' entrevistas'
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
            name: 'Ótimo',
            data: [698],
            color: 'skyblue'
        },
        {
            name: 'Bom',
            data: [1378],
            color: 'lightgreen'
        },{
            name: 'Regular',
            data: [212],
            color: 'yellow'
        },
        {
            name: 'Péssimo',
            data: [22],
            color: '#ff8080'
        },
        {
            name: 'Não responderam',
            data: [355],
            color: '#808080'
        }
    ]
});
