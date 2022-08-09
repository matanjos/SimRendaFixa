<template>
  <Line :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)


export default {
  name: 'LineChart',
  components: { Line },
  props: {
    chartData: {
        type: Object,
        required: true
      },
    },
    data() {
    return {
      chartOptions: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Evolução dos Investimento ao longo do tempo',
                color: 'black',
                font:{
                  size:14
                      }
            }
        },
        scales: {
            y: {
                 title: {
                display: true,
                text: 'Valor bruto (Reais)',
                color: 'black',
                font:{
                       size:14,
                       weight: 'bold'
                      }
              }
            },
            x: {
                 title: {
                          display: true,
                          text: 'Tempo de investimento (meses)',
                          color: 'black',
                          font:{
                                  size:14,
                                  weight: 'bold'
                                }
              }
            }
        }
    }
    }
  }

}
</script>