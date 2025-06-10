<template>
  <div>
    <AppBar />
    <InslineStyleVue />
    <CssStyleVue />
    <hr>
    <v-container>
      <h1 class="text-center custom-bg-red">Welcome to My App</h1>
      <p class="text-center custom-bg-blue">This is a simple Vue.js application.</p>
    </v-container>
    <hr>
    <TransitionBasic />
  </div>
</template>

<script setup>
import AppBar from './AppBar.vue';
import InslineStyleVue from './InslineStyle.vue';
import CssStyleVue from './CssStyle.vue';
import TransitionBasic from './TransitionBasic.vue';
</script>

<style lang="scss">
  .custom-bg-red {
    background-color: #f60000;
  }
</style>