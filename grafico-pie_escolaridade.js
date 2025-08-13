document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_escolaridade', {
        chart: {
            type: 'pie',
            events: {
                render: function () {
                    const chart = this;
                    const series = chart.series[0];
                    const total = series.data.reduce((sum, point) => sum + point.y, 0);
                    const textX = chart.plotWidth / 2.3 + chart.plotLeft;
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
            text: 'Censo 2025: Escolaridade'
        },
        subtitle: {
            text: 'Informações de escolaridade nos domicílios que responderam ao Censo'
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal',
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
                { name: 'Analfabetos', y: 500, color: 'rgb(255, 0, 0)' },
                { name: 'Ensino Fundamental incompleto', y: 1991, color: 'rgb(255, 127, 0)'},
                { name: 'Ensino Fundamental completo', y: 567, color: 'rgb(255, 255, 0)' },
                { name: 'Ensino Médio incompleto', y: 430, color: 'rgb(0, 255, 0)' },
                { name: 'Ensino Médio completo', y: 1592, color: 'rgb(0, 255, 255)'  },
                { name: 'Superior incompleto', y: 198, color: 'rgb(0, 0, 255)'  },
                { name: 'Superior completo', y: 597, color: 'rgb(148, 0, 211)'  }
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