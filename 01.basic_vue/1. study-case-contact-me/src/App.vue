<template>
  <div>
    <h1>App</h1>
    <ContactMeFormVue :handleClickPlus="handleClickPlus"/>
    <ContactCardVue :form="form" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactCardVue from "./components/ContactCard.vue";
import ContactMeFormVue from "./components/ContactMeForm.vue";
const data = [];
const form = ref(data);

function handleClickPlus(name, email){
  form.value.push({name, email});
}
</script>

<style lang="scss" scoped>

</style>