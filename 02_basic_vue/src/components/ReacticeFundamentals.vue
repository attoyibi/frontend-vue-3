<template>
    <div>
        <button @click="increament">Count ++ </button>
        {{ count }}
    </div>
</template>

<script setup>
import {ref} from 'vue';
const count= ref(0);
function increament(){
    count.value++;
    console.log(count.value)
}
</script>

<style lang="scss" scoped>

</style>