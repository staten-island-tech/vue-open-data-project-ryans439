<template>
  <div id="app">
    <nav>
      <router-link to="/">Amount of Test Takers Per School</router-link>
      <router-link to="/about">Schools and Avg SAT Scores</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

