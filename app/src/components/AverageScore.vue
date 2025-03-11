<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" /> 
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>

</style>


https://data.cityofnewyork.us/resource/f9bf-2cp4.json

scaffolding:
homeview: (subject three bars)
 - title bar component
 - dropdown menu component (schools)
 - chart component
 - hover aspect to see exactly how much
 - button components links (back to home page or amt takers/school page) 

 avg test taker page
     - table of data component
     - back button component to go back to the home page
      avg test taker page
     - title component
     - dropdown menu component
     - chart component (line graph format)


data organization:
 - schools/subject avg score
 - schools and the amt of test takers
average score page w reading, writing, and math, which a selection of schools will pop up
test taker page, selection of schools will pop up


