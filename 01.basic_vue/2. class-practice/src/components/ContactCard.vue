<template>
    <div>
        <h1>Contact Card</h1>
        <ul v-if="form">
            <li v-for="(contact, index) in form" :key="index">
                data kontak
                {{ contact.name }}
                {{ contact.email }}
            </li>
        </ul>
        <p v-else>no contact</p>
    </div>
</template>

<script setup>
    defineProps(['form']);
</script>

<style lang="scss" scoped>

</style>