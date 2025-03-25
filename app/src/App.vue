<template>
  <div id="app">
    <nav>
      <router-link to="/">Schools vs. SAT Scores</router-link>
      <router-link to="/about">Schools vs. Subjects On SAT Exam</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
nav a {
  margin-right: 10px;
}
</style>