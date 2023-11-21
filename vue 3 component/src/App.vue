<template>
  <div id="app">
    <HelloWorld msg="Pesan Dari App.vue" />
    <ComponentProps
      message="Halo, ini adalah contoh component"
      count="10"
      isFinished="true"
      :address="{
        street: 'Jl. Raya Geger',
        city: 'Desa Geger',
        province: 'Jawa Timur',
      }"
      :list="['satu', 'dua', 'tiga']"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComponentProps from "./components/ComponentProps.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ComponentProps,
  },
};
</script>
