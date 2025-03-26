<template>
  <CardComp v-for="school in data" :key="school.school_name" :school="school"/>>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardComp from '../components/CardComp.vue';
const data = ref([]);

onMounted(async () => {
  const response = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json");
  data.value = await response.json();
});
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