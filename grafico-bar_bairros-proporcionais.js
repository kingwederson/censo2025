Highcharts.chart('grafico-bar_bairros-proporcionais', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Censo 2025: População por localização'
    },
    subtitle: {
        text: 'Proporção de residentes por localidade.'
    },
    tooltip: {
        pointFormat: '<b>{point.y} pessoas</b> ({point.percentage:.2f}%)'
    },
    plotOptions: {
        pie: {
            innerSize: '60%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y} pessoas<br>({point.percentage:.2f}%)'
            }
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
    series: [{
        name: 'População',
        colorByPoint: true,
        data: [
            { name: 'Bairro do Hospital', y: 321 },
            { name: 'Britador', y: 594 },
            { name: 'Candeias', y: 57 },
            { name: 'Centro', y: 1590 },
            { name: 'COHAB', y: 48 },
            { name: 'Fábrica e Lava-Pés', y: 554 },
            { name: 'Jardim das Paineiras', y: 132 },
            { name: 'Jardim do Sol', y: 27 },
            { name: 'Niterói', y: 869 },
            { name: 'Residencial Mantiqueira', y: 2 },
            { name: 'Sidney Marques', y: 43 },
            { name: 'Taboão', y: 272 },
            { name: 'Várzea', y: 714 },
            { name: 'Vila dos Franceses', y: 335 },
            { name: 'Vila Formosa', y: 409 },
            { name: 'Zona Rural', y: 636 }
        ]
    }]
});
