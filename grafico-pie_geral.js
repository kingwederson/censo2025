const colors = Highcharts.getOptions().colors,
    categories = [
        'Positiva',
        'Negativa',
    ],
    data = [{
            y: 82.73,
            color: colors[2],
            drilldown: {
                name: 'Positiva',
                categories: [
                    'Ótimo',
                    'Bom'
                ],
                data: [
                    16.33,
                    66.40,
                ]
            }
        },
        {
            y: 17.27,
            color: colors[3],
            drilldown: {
                name: 'Negativa',
                categories: [
                    'Regular',
                    'Péssimo'
                ],
                data: [
                    14.48,
                    2.79
                ]
            }
        }
    ],
    browserData = [],
    versionsData = [],
    dataLen = data.length;

let i,
    j,
    drillDataLen,
    brightness;


// Build the data arrays

for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        const name = data[i].drilldown.categories[j];
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name,
            y: data[i].drilldown.data[j],
            color: Highcharts.color(data[i].color).brighten(brightness).get(),
            custom: {
                version: name.split(' ')[1] || name.split(' ')[0]
            }
        });
    }
}

// Create the chart
Highcharts.chart('grafico-pie_geral', {
    colors: ['#2b908f', '#f45b5b', '#90ee7e', '#7798BF'], // Defina suas cores aqui
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Censo 2025: Avaliação geral da Administração por domicílio'
    },
    subtitle: {
        text: 'A Administração foi avaliada positivamente por 82.73% dos domicílios, enquanto 17.27% avaliaram negativamente.',
        align: 'justify',
        verticalAlign: 'bottom',
        y: 5
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    credits: {
        enabled: true,
        href: "https://bomjardimdeminas.mg.gov.br",
        text: "Fonte: Censo Municipal 2025",
        style: {
            color: "#000",
            fontSize: "0.6em",
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [
      {
        name: 'Avaliação',
        data: browserData,
        size: '45%',
        dataLabels: {
            format: '<b>{point.name}:</b><br><span style="font-size:1.5em;font-weight:bolder;">'+'{y}%</span>',
            color: '#ffffff',
            distance: '-50%'
        }
    }, {
        name: 'Classificação',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            format: '<b>{point.name}:</b><br><span style="font-size:1.5em;font-weight:bolder;">'+'{y}%</span>',
            filter: {
                property: 'y',
                operator: '>',
                value: 1
            },
            style: {
                fontWeight: 'normal'
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{}, {
                    id: 'versions',
                    dataLabels: {
                        distance: 10,
                        format: '{point.custom.version}',
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 2
                        }
                    }
                }]
            }
        }]
    }
});