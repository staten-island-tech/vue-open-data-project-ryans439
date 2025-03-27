<template>
  <div>
    <h1>NYC School SAT Takers</h1>
    <SchoolChart/>
  </div>
</template>

<script setup>
import SchoolChart from '@/components/SchoolChart.vue';
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>