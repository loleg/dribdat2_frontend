<template>
    <canvas ref="chLine"></canvas>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        name: "contributionChart",
        props: {chartData: {
            labels: [],
            datasets: [
                {data: []}
            ]
            }},
        mounted  (){
            this.createChart()
        },
        methods: {

            createChart() {
                /* chart.js chart examples */

// chart colors
                var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

                /* large line chart */
                var chLine = this.$refs.chLine
                var chartData = {
                    labels: this.chartData.labels,
                    datasets: [{
                        data: this.chartData.datasets[0].data,
                        backgroundColor: colors[0],
                        borderColor: colors[0],
                        borderWidth: 2,
                        pointBackgroundColor: colors[0],
                        pointRadius: 0
                    }]
                };
                if (chLine) {
                    new Chart(chLine, {
                        type: 'line',
                        data: chartData,
                        options: {
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: false
                                    }
                                }]
                            },
                            legend: {
                                display: false
                            },
                            responsive: true
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>