<template>
    <div>
      <h2>Schools vs. SAT Scores</h2>
      <canvas ref="chartCanvas"></canvas>
      
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  
  const chartCanvas = ref(null);
  
  onMounted(async () => {
    const response = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json");
    const data = await response.json();
    const labels = data.map(school => school.school_name);
    const testTakers = data.map(school => Number(school.num_of_sat_test_takers));

    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Test Taker Count', data: testTakers, backgroundColor: 'blue' },

        ]
      }
    });
  });
  </script>
  
<style scoped>
</style>