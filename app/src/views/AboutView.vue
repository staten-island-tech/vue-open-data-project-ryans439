<template>
    <div>
      <h1>NYC School SAT Performance</h1>
      <SubjectChart/>
    </div>
  </template>
  
  <script setup>
  import SubjectChart from '@/components/SubjectChart.vue';
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  p {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>