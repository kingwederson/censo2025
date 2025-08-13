Highcharts.chart('grafico-coluna_qual-o-tipo-de-moradia', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Censo 2025: Tipo de moradia em Bom Jardim de Minas'
    },
    subtitle: {
        text: 'Como responderam os cidadãos a: Qual o tipo de moradia?'
    },
    credits: {
        enabled: true,
        href:"",
            text:"Fonte: Censo Municipal 2025",
            style:{
                color:"#000",
                fontSize: "0.6em",
            }
    },
    xAxis: {
        categories: [
            'Tipo de moradia'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'moradias'
        },
        min: 0,
        //max: 60
    },
    legend: {
        reversed: false
    },
    plotOptions: {
        series: {
            stacking: null,
            dataLabels: {
                enabled: true,
                    format: '{point.y:.0f}'
            }
        }
    },
    series: [
        {
            name: 'Alugada',
            data: [539],
            color: '#e1fb19'
        },
        {
            name: 'Cedida',
            data: [129],
            color: '#e18b19'
        },
        {
            name: 'Própria',
            data: [1632],
            color: '#19fb8b'
        },
        {
            name: 'Multiplas respostas',
            data: [10],
            color: '#888'
        },
        {
            name: 'não responderam',
            data: [355],
            color: '#000'
        }
    ]
});
