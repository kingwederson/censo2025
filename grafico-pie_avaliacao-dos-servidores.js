document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_avaliacao-dos-servidores', {
        chart: {
            type: 'pie',
            events: {
                render: function () {
                    const chart = this;
                    const series = chart.series[0];
                    const total = series.data.reduce((sum, point) => sum + point.y, 0);
                    const textX = chart.plotWidth / 1.9 + chart.plotLeft;
                    const textY = chart.plotHeight / 1.8 + chart.plotTop;

                    if (chart.totalLabel) {
                        chart.totalLabel.destroy();
                    }

                    chart.totalLabel = chart.renderer.text(
                        total.toLocaleString('pt-BR'),
                        textX,
                        textY
                    )
                    .attr({
                        'text-anchor': 'middle',
                        'alignment-baseline': 'middle',
                        'font-size': '24px',
                        'font-weight': 'bold'
                    })
                    .add();
                }
            }
        },
        title: {
            text: 'Censo 2025: Avaliação do trabalho dos servidores públicos municipais'
        },
        subtitle: {
            text: 'Resposta por número de domicílos',
            align: 'justify',        // esquerda, centro ou direita
            verticalAlign: 'bottom',// posiciona embaixo do gráfico
            y: 5 
        },
        legend: {
            align: 'left',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<span style="font-size:1.2em">{point.name}</span>:<br><span style="font-size:1.5em">{point.percentage:.2f}%</span>'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Habitantes',
            colorByPoint: true,
            data: [
                { name: 'Ótimo', y: 698,color: '#198bfb' },
                { name: 'Bom', y: 1378, color: '#19fb8b' },
                { name: 'Regular', y: 212, color: '#e1fb19' },
                { name: 'Péssimo', y: 22, color: '#e11b19' },
                { name: 'Não responderam', y: 355, color: '#000' }
            ]
        }],
        credits: {
            enabled: true,
            href:"https://bomjardimdeminas.mg.gov.br",
                text:"Fonte: Censo Municipal 2025",
                style:{
                    color:"#000",
                    fontSize: "0.6em",
                }
        }
    });
});