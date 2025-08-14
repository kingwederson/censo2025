document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_saude', {
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
            text: 'Censo 2025: Avaliação da gestão na pasta de Saúde'
        },
        subtitle: {
            text: 'Como os representantes dos domicílios avaliam a gestão na pasta de Saúde?'
        },
        legend: {
            align: 'left',
            verticalAlign: 'middle',
            layout: 'vertical'
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
                    format: '{point.name}:<br>{point.percentage:.2f}%<br>{point.y}'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Moradias',
            colorByPoint: true,
            data: [
                { name: 'Ótimo', y: 535,color: '#198bfb' },
                { name: 'Bom', y: 1346, color: '#19fb8b' },
                { name: 'Regular', y: 382, color: '#e1fb19' },
                { name: 'Péssimo', y: 47, color: '#e11b19' },
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