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
            text: 'Censo 2025: Faixa etária'
        },
        subtitle: {
            text: 'Informações de faixa etária nos domicílios que responderam ao Censo'
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
                { name: 'De 0 a 12 anos', y: 788 },
                { name: 'De 13 a 17 anos', y: 388 },
                { name: 'De 18 a 64 anos', y: 3683 },
                { name: 'Mais de 64 anos', y: 1241 }
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