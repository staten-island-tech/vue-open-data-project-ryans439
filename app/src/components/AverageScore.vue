<template>
  <div>
    <label for="schools">Select A School</label>
    <select id="schools" v-model=selectedSchool>
      <option value = "school1">Text</option>
      <option value = "school2">Text</option>
      <option value = "school3">Text</option>
    </select>
    <p>{{ selectedSchool }}</p>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
export default {
  setup() {
    const selectedSchool = ref('school1');
    return selectedSchool;
}
}

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


