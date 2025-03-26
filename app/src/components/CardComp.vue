<template>
  <div class="flex flex-col p-4 m-4 bg-white rounded-lg shadow-lg">
    <h1>Cards View</h1>
    <h2>{{ school.school_name }}</h2>
    <p>Test Takers: {{ school.num_of_sat_test_takers }}</p>
    <p>SAT Math Avg Score: {{ school.sat_math_avg_score }}</p>
    <p>SAT Critical Reading Avg Score: {{ school.sat_critical_reading_avg_score }}</p>
    <p>SAT Writing Avg Score: {{ school.sat_writing_avg_score }}</p>
  </div>
</template>

<script setup>
defineProps({
  school: {
    type: Object
  }
});
</script>

<style scoped></style>
