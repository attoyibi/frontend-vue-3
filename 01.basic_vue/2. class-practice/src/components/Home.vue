<template>
    <div>
        <!-- tempat html -->
         <h1>Home Component</h1>
         {{ hello }}
         {{ message }}
         <button @click="loadMore">Load More From Home</button>
    </div>
</template>

<script setup>
// tempat javascriptnya
import {ref} from 'vue'
defineProps({
    message: String, 
    loadMore : Function
});
const hello = ref("hello");

</script>

<style lang="scss" scoped>
// tempat cssnya
</style>