<template>
    <div>
        <h1>CSS Style Example</h1>
        <p class="custom-bg-green">This is a paragraph with CSS styles.</p>
        <p class="custom-bg-primary">This is another paragraph with primary color styles.</p>
        <p class="custom-bg-red">global css</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.custom-bg-green {
    background-color: #00f600;
}
.custom-bg-primary {
    background-color: $custom-primary-color;
}
</style>