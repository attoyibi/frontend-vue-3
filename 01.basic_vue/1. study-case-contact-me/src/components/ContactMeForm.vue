<template>
    <div>
        <h1>Contact Me Form</h1>
        <form @submit.prevent="handleSubmti">
            <input v-model="name" placeholder="Name"/>
            {{ name }}
            <input v-model="email" placeholder="Email"/>
            {{ email }}
            <button @click="handleClickPlus(name, email)">Submit</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue';
defineProps({
    handleClickPlus: Function
});
const name = ref(null);
const email = ref(null)
</script>

<style lang="scss" scoped>

</style>