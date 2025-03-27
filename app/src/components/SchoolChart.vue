<template>
  <div class="chart-container">
    <h2>Average Test Taker Count</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const chartCanvas = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json");
    const data = await response.json();
    const labels = data.map(school => school.school_name);
    const testTakers = data.map(school => Number(school.num_of_sat_test_takers));

    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Test Taker Count', data: testTakers, backgroundColor: 'lightblue' },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'NYC Schools'
            },
            ticks: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: (context) => context[0].label,
              label: (context) => `Test Taker Count: ${context.raw}`
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
.chart-container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px;
  padding-left: 35px;
}

h2 {
  margin-bottom: 35px;
  text-align: center;
  font-size: 1.2em;
}

.chart-container canvas {
  width: 100% !important;
  height: 550px !important;
  padding: 35px;
}
</style>