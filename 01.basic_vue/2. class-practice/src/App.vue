<template>
  <div>
    <h1>App</h1>
    <div>
      <input placeholder="name" type="text" v-model="hello">
      {{ hello }}
    </div>
    <div>
      <button @click="handleClick" type="button">+1</button>
      reactive : {{ count.count }}
    </div>
    <hr>
    <!-- <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ post }}
      </li>
    </ul> -->
    <button @click="loadMore">Load More</button>
    <hr>
    <ContactCard :form="form"/>
  </div>
</template>

<script setup>
import {useCounter} from './composables/useCounter';
import { reactive, ref } from 'vue';
import Home from './components/Home.vue';
import ContactCard from './components/ContactCard.vue';
const posts = reactive(["post 1", "post 2"]);
const greeting = ref("hallo from app");
const data = [];
const form = ref(data);
const {hello, count, handleClick} = useCounter();

function loadMore(){
  console.log(form === data);
}

</script>

<style lang="scss" scoped>

</style>