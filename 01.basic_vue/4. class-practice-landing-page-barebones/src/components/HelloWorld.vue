<template>
  <div class="text-center">
    <v-sheet elevation="2">
      <h1 class="bg-red-darken-2 rounded-pill">Hello World</h1>
    </v-sheet>
    <v-row>
      <v-col>
        <v-btn @click="show = !show">
          Expand Transition
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>

<style lang="scss" scoped>
.custom-bg-red {
  background-color: rgb(255, 255, 255);
}
</style>