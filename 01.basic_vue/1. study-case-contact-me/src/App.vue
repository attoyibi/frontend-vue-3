<template>
  <div>
    <h1>App</h1>
    <ContactMeFormVue :handleSubmitForm="handleSubmitForm"/>
    <ContactCardVue :form="form" />
  </div>
<hr>
<ReactiveIssue />
</template>

<script setup>
import { ref } from "vue";
import ContactCardVue from "./components/ContactCard.vue";
import ContactMeFormVue from "./components/ContactMeForm.vue";
import SlotComponent from "./components/SlotComponent.vue";
import ReactiveIssue from "./components/ReactiveIssue.vue";
const data = [];
const form = ref(data);

function handleSubmitForm(name, email){
  form.value.push({name, email});
}
</script>

<style lang="scss" scoped>

</style>