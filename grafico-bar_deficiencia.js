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
    },
    plotOptions: {
        column: {
            innerSize: '60%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: `{point.y}<br>`
            },
            showInLegend: true
        }
    },
        credits: {
            enabled: true,
            href:"https://bomjardimdeminas.mg.gov.br",
                text:"Fonte: Censo Municipal 2025",
                style:{
                    color:"#000",
                    fontSize: "0.6em",
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
        },
        {
            name: 'Intelectual',
            data: [144]
        },
        {
            name: 'Dois ou três tipos anteriores',
            data: [129]
        },
        {
            name: 'Algum tipo de transtorno',
            data: [554],
            color: '#808080'
        }
    ]
});
