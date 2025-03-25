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
    const mathScores = data.map(school => Number(school.sat_math_avg_score));
    const readingScores = data.map(school => Number(school.sat_critical_reading_avg_score));
    const writingScores = data.map(school => Number(school.sat_writing_avg_score));
  
    new Chart(subjectCanvas.value, {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: 'Math', data: mathScores, borderColor: 'red', fill: false },
          { label: 'Reading', data: readingScores, borderColor: 'green', fill: false },
          { label: 'Writing', data: writingScores, borderColor: 'blue', fill: false }
        ]
      }
    });
  });
  </script>
  
<style scoped>

</style>
  