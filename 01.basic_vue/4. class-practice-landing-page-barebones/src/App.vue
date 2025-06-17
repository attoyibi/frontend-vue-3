<template>
  <v-app>
    <v-app-bar>
       <v-app-bar-title>Application Bar</v-app-bar-title>
      </v-app-bar>
    <v-main>
      <!-- <AppBar /> -->
      
      <HelloWorld />
      <v-row>
      <v-col>
        <v-btn @click="show = !show">
          Expand Transition app 
        </v-btn>
        <v-expand-transition >
          <v-card
          v-if="show"
           height="100"
              width="100">
              <v-card-text>this is card text</v-card-text>
          </v-card>

        </v-expand-transition>
      </v-col>
    </v-row>
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Footer from './components/Footer.vue';
import { createSSRApp } from 'vue';


</script>
