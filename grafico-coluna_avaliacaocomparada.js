Highcharts.chart('grafico-coluna_avaliacaocomparada', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Avaliação Comparada dos Serviços Públicos'
    },
    subtitle: {
        text: 'Como avaliaram os representantes dos domicílios os serviços públicos'
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
            'Saúde' , 'Educação' , 'Ação Social' , 'Esporte' , 'Cultura' , 'Lazer' , 'Turismo', 'Transporte', 'Obras e Urmanismo', 'Agropecuária', 'Meio Ambiente'
        ],
    plotLines: [
        {
            color: '#888',      // Cor da linha
            width: 2,           // Espessura
            value: 0.5,         // Posição entre categorias (exemplo: entre Saúde e Educação)
            zIndex: 5
        },
        {
            color: '#888',      // Cor da linha
            width: 2,           // Espessura
            value: 1.5,         // Posição entre categorias (exemplo: entre Educação e Ação Social)
            zIndex: 5
        },
        {
            color: '#888',      // Cor da linha
            width: 2,           // Espessura
            value: 2.5,
            zIndex: 5
        },
        {
            color: '#888',      // Cor da linha
            width: 2,           // Espessura
            value: 3.5,
            zIndex: 5
        },
        {
            color: '#888',      // Cor da linha
            width: 2,           // Espessura
            value: 4.5,         // Entre Cultura e Lazer
            zIndex: 5
        },
        {
            color: '#888',
            width: 2,
            value: 5.5,
            zIndex: 5
        },
        {
            color: '#888',
            width: 2,
            value: 6.5,
            zIndex: 5
        },
        {
            color: '#888',
            width: 2,
            value: 7.5,
            zIndex: 5
        },
        {
            color: '#888',
            width: 2,
            value: 8.5,
            zIndex: 5
        },
        {
            color: '#888',
            width: 2,
            value: 9.5,
            zIndex: 5
        }
        // Adicione mais linhas conforme necessário
    ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'votação'
        },
        min: 0,
        max: 1750
    },
    legend: {
        reversed: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.05,   // Menor valor = barras mais largas
            groupPadding: 0.01    // Menor valor = menos espaço entre grupos
        },
        series: {
            stacking: null,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },
    series: [{
        name: 'Ótimo',
        data: [
            535, // Saúde
            419, // Educação
            429, // Ação Social
            361, // Esporte
            330, // Cultura
            312, // Lazer
            323, // Turismo
            365, // Transporte
            513, // Obras e Urbanismo
            291, // Agropecuária
            271 // Meio Ambiente
        ],
        color: '#198bfb'
    },{
        name: 'Bom',
        data: [
            1346, // Saúde
            1522, // Educação
            1632, // Ação Social
            1597, // Esporte
            1636, // Cultura
            1440, // Lazer
            1533, // Turismo
            1447, // Transporte
            1470, // Obras e Urbanismo
            1717, // Agropecuária
            1532 // Meio Ambiente
        ],
        color: '#19fb8b' 
    },{
        name: 'Regular',
        data: [
            382, // Saúde
            322, // Educação
            218, // Ação Social
            304, // Esporte
            304, // Cultura
            462, // Lazer
            385, // Turismo
            353, // Transporte
            268, // Obras e Urbanismo
            259, // Agropecuária
            422 // Meio Ambiente
        ],
        color: '#e1fb19'
    },{
        name: 'Péssimo',
        data: [
            47, // Saúde
            47, // Educação
            31, // Ação Social
            48, // Esporte
            40, // Cultura
            96, // Lazer
            69, // Turismo
            145, // Transporte
            59, // Obras e Urbanismo
            43, // Agropecuária
            85 // Meio Ambiente
        ],
        color: '#e11b19'
    },{
        name: 'não respondeu',
        data: [
            355, // Saúde
            355, // Educação
            355, // Ação Social
            355, // Esporte
            355, // Cultura
            355, // Lazer
            355, // Turismo
            355, // Transporte
            355, // Obras e Urbanismo
            355, // Agropecuária
            355 // Meio Ambiente
        ],
        color: '#808080'
    }]
});
