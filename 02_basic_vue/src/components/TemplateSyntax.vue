<template>
    <div>
        <h2>Template Syntax</h2>

        <h3>Text Interpolation</h3>
        <p>Message : {{ message }}</p>
        <p>Using v-html directive: <span v-html="message"></span></p>
        <AttributeBindings/>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const message = ref('Halo, Vue!')
</script>

<style lang="scss" scoped>

</style>