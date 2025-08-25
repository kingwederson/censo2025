Highcharts.chart('grafico-bar_bairros', {
    chart: {
        type: 'bar' // Altere para barras horizontais
    },
    title: {
        text: 'Censo 2025: População por localidade'
    },
    subtitle: {
        text: 'Quantidade de residentes por localidade.'
    },
    xAxis: {
        categories: [
            'Bairro do Hospital',
            'Britador',
            'Candeias',
            'Centro',
            'COHAB',
            'Fábrica e Lava-Pés',
            'Jardim das Paineiras',
            'Jardim do Sol',
            'Niterói',
            'Residencial Mantiqueira',
            'Sidney Marques',
            'Taboão',
            'Várzea',
            'Vila dos Franceses',
            'Vila Formosa',
            'Zona Rural'
        ],
        title: {
            text: 'Localidade'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Pessoas'
        }
    },
    tooltip: {
        valueSuffix: ' pessoas'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.y}'
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
        data: [
            321,    // Bairro do Hospital
            594,    // Britador
            57,     // Candeias
            1590,   // Centro
            48,     // COHAB
            554,    // Fábrica e Lava-Pés (549+5)
            132,    // Jardim das Paineiras
            27,     // Jardim do Sol
            869,    // Niterói
            2,      // Residencial Mantiqueira
            43,     // Sidney Marques
            272,    // Taboão
            714,    // Várzea
            335,    // Vila dos Franceses
            409,    // Vila Formosa
            636+69  // Zona Rural
        ]
    }]
});
