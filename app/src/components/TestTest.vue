<template>
    <LineChart :chart-data="chartData" :chart-options="chartOptions" />
  </template>
  
  <script>
  import { Line as LineChart } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)
  
  export default {
    name: 'LineChartComponent',
    components: {
      LineChart
    },
    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Data',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>