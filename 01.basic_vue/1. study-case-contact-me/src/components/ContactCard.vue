<template>
    <div>
        <h1>Contact Card</h1>
        <div v-if="form.length > 0">
            <ul style="border: solid gray 2px;" v-for="(data, index) in form" :key="index">
                <li>{{ data.name }}</li>
                <li>{{ data.email }}</li>
            </ul>
        </div>
        <div v-else>
            <h5>data kosong</h5>
        </div>
    </div>
</template>

<script setup>
defineProps(['form']);
</script>

<style lang="scss" scoped>

</style>