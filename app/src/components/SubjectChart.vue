<template>
    <div>
      <h2>SAT Subject Scores</h2>
      <canvas ref="subjectCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  
  const subjectCanvas = ref(null);
  
  onMounted(async () => {
    const response = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json");
    const data = await response.json();
    const labels = data.map(school => school.school_name);
    const overallScores = data.map(school => 
        Number(school.sat_math_avg_score) + 
        Number(school.sat_critical_reading_avg_score) + 
        Number(school.sat_writing_avg_score)
    );
    new Chart(subjectCanvas.value, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {label: 'SAT Scores', data: overallScores, borderColor: 'red', fill: false}
        ]
      }
    });
  });
  </script>
  
<style scoped>

</style>
  