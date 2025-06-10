<template>
        <h1>Contact Me Form</h1>
        <form @submit.prevent="handleSubmitForm(name, email)">
            <input v-model="name" placeholder="Name" />
            <span>{{ name }}</span>
            <input v-model="email" placeholder="Email" />
            <span>{{ email }}</span>
            <button type="submit">Submit</button>
        </form>
</template>

<script setup>
import {ref} from 'vue';
defineProps({
    handleSubmitForm: Function
});
const name = ref(null);
const email = ref(null)
</script>

<style lang="scss" scoped>

</style>