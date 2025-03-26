<template>
  <div>
    <nav>
      <router-link to="/Home">Amount of Test Takers Per School</router-link>
      <router-link to="/about">Schools and Avg SAT Scores</router-link>
      <router-link to="/cards">Cards View</router-link>
    </nav>
    <h1>NYC School SAT Performance</h1>
    <SchoolChart />
  </div>
</template>

<script setup>
import SchoolChart from '@/components/SchoolChart.vue';
</script>// views/HomeView.vue

