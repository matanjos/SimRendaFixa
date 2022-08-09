<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
        type: Object,
        required: true
      }
  },
   data() {
    return {
      chartOptions: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Valor final dos Investimentos',
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
                text: 'Valor Líquido (Reais)',
                color: 'black',
                font:{
                  size:14,
                  weight: 'bold'
                }
              }
            },
        }
    }
    }
  }
}
</script>