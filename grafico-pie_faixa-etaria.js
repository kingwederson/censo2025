document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_faixa-etaria', {
        chart: {
            type: 'pie',
            events: {
                render: function () {
                    const chart = this;
                    const series = chart.series[0];
                    const total = series.data.reduce((sum, point) => sum + point.y, 0);
                    const textX = chart.plotWidth / 2 + chart.plotLeft;
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
            text: 'Censo 2025: Faixa etária *'
        },
        subtitle: {
            text: '* As entrevistas contabilizaram paras as faixas etárias de 0-12, 13-17, 18-64 e 64+ respectivamente 745, 354, 3692 e 944 pessoas. Esses valores permitiram obter a densidade populacional por domicílio para <em>estimativa</em> do total de habitantes nestas categorias.',
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
            pointFormatter: function () {
                return `${this.series.name}: <b>${this.y.toLocaleString('pt-BR')} (${this.percentage.toFixed(1)}%)</b>`;
            }
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return `<span style="font-size:1.2em">${this.point.name}</span>:<br><span style="font-size:1.5em">${this.percentage.toFixed(2)}%</span><br>${this.y.toLocaleString('pt-BR')}`;
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Habitantes',
            colorByPoint: true,
            data: [
                { name: 'De 0 a 12 anos', y: 876 },
                { name: 'De 13 a 17 anos', y: 411 },
                { name: 'De 18 a 64 anos', y: 4289 },
                { name: 'Mais de 64 anos', y: 1096 }
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