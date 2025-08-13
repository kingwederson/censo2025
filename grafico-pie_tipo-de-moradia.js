document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_tipo-de-moradia', {
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
            text: 'Censo 2025: Tipo de moradia'
        },
        subtitle: {
            text: 'O que os cidadãos responderam a: Qual o tipo de moradia?'
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
                { name: 'Alugada', y: 539, color: '#e1fb19' },
                { name: 'Cedida', y: 129, color: '#e18b19' },
                { name: 'Própria', y: 1632,color: '#19fb8b' },
                { name: 'Outros', y: 10, color: '#888' },
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