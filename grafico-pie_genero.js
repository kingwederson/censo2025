document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_genero', {
        chart: {
            type: 'pie',
            events: {
                render: function () {
                    const chart = this;
                    const series = chart.series[0];
                    const total = series.data.reduce((sum, point) => sum + point.y, 0);
                    const textX = chart.plotWidth / 2 + chart.plotLeft;
                    const textY = chart.plotHeight / 2 + chart.plotTop;

                    if (chart.totalLabel) {
                        chart.totalLabel.destroy();
                    }

                    chart.totalLabel = chart.renderer.text(
                    'Total: <br> <b>' + total.toLocaleString('fr-FR') + '</b>',
                    textX,
                    textY,
                    true // Permite HTML básico como <br>
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
            text: 'Censo 2025: Gênero *'
        },
        subtitle: {
            text: '* As entrevistas contabilizaram 2847 homens e 2897 mulheres. Esses valores permitiram obter a densidade populacional por domicílio para <em>estimativa</em> do total de habitantes. Densidades: 1.07 homens/domicílios e 1.09 mulheres/domicílio.',
            align: 'justify',        // esquerda, centro ou direita
            verticalAlign: 'bottom',// posiciona embaixo do gráfico
            y: 5 
        },
        legend: {
            align: 'left',
            verticalAlign: 'middle',
            layout: 'vertical',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>'
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}:<br>{point.percentage:.2f}%<br>{point.y} 👤'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Habitantes',
            colorByPoint: true,
            data: [
                { name: 'Homens', y: 2847+460, color: 'rgb(44,175,254)' },
                { name: 'Mulheres', y: 2897+468, color: 'rgb(255,99,132)' }
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