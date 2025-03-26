<template>
  <div class="cards-view">
    <h1 class="title">Schools Data</h1>
    <div class="card-container">
      <div v-for="school in data" :key="school.school_name" class="card">
        <h2 class="school-name">{{ school.school_name }}</h2>
        <div class="stats">
          <p class="stat">Test Takers: {{ school.num_of_sat_test_takers }}</p>
          <p class="stat">SAT Math Avg Score: {{ school.sat_math_avg_score }}</p>
          <p class="stat">SAT Critical Reading Avg Score: {{ school.sat_critical_reading_avg_score }}</p>
          <p class="stat">SAT Writing Avg Score: {{ school.sat_writing_avg_score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref([]);

onMounted(async () => {
  console.log('Fetching data...');
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json");
    console.log('Data fetched:', response);
    if (!response.ok) {
      console.error('Error fetching data:', response.status);
      return;
    }
    const jsonData = await response.json();
    console.log('Data parsed:', jsonData);
    data.value = jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

console.log('Data:', data);
</script>

<style scoped>
.cards-view {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
}

.school-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.stats {
  margin-top: 20px;
}

.stat {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>