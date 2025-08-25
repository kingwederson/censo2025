document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-pie_escolaridade', {
        chart: {
            type: 'pie',
            events: {
                render: function () {
                    const chart = this;
                    const series = chart.series[0];
                    const total = series.data.reduce((sum, point) => sum + point.y, 0);
                    const textX = chart.plotWidth / 2.1 + chart.plotLeft;
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
            text: 'Censo 2025: Escolaridade *'
        },
        subtitle: {
            text: '* As entrevistas contabilizaram paras as categorias de escolaridade de analfabetos, fundamental incompleto, fundamental completo, médio incompleto, médio completo, superior incompleto e superior completo respectivamente 469, 1979, 468, 397, 1755, 161 e 515 pessoas. Esses valores permitiram obter a densidade populacional por domicílio para <em>estimativa</em> do total de habitantes nestas categorias.',
            align: 'justify',
            verticalAlign: 'bottom',
            y: 5 
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:,.0f} ({point.percentage:.1f}%)</b>',
            valueDecimals: 0,
            valueSuffix: '',
            valuePrefix: '',
            valueFormatter: function() {
                return this.y.toLocaleString('pt-BR');
            }
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return this.point.name + ':<br><span style="font-size:1.5em">' +
                            this.percentage.toFixed(2) + '%</span><br>' +
                            this.y.toLocaleString('pt-BR');
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Moradias',
            colorByPoint: true,
            data: [
                { name: 'Analfabetos', y: 545, color: 'rgb(255, 0, 0)' },
                { name: 'Ensino Fundamental incompleto', y: 2299, color: 'rgb(255, 127, 0)'},
                { name: 'Ensino Fundamental completo', y: 543, color: 'rgb(255, 255, 0)' },
                { name: 'Ensino Médio incompleto', y: 461, color: 'rgb(0, 255, 0)' },
                { name: 'Ensino Médio completo', y: 2039, color: 'rgb(0, 255, 255)'  },
                { name: 'Superior incompleto', y: 187, color: 'rgb(0, 0, 255)'  },
                { name: 'Superior completo', y: 598, color: 'rgb(148, 0, 211)'  }
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