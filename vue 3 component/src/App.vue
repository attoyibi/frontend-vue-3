<template>
  <div id="app">
    <HelloWorld msg="Pesan Dari App.vue" />
    <Home />
</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComponentProps from "./components/ComponentProps.vue";
import Home from "./view/Home.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ComponentProps, 
    Home
  },
};
</script>
