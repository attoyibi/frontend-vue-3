<template>
    <div>
        <h1>Mounted</h1>
        {{ users }}
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const users = ref([]);
onMounted(async()=>{
    console.log('Mounted lifecycle hook called');
    // disinilah kebanyakan kita melakukan fetch data
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        users.value = data;

    }catch(error){
        console.error('Error fetching data:', error);
    }
});
</script>

<style lang="scss" scoped>

</style>