<template>
    <div>
        <h1>Contact Me Form</h1>
        <form @submit.prevent="handleSubmitForm(name, email)">
            <input v-model="name" placeholder="Name" />
            {{ name }}
            <input v-model="email" placeholder="Email" />
            {{ email }}
            <button type="submit">Submit</button>
        </form>
    </div>
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