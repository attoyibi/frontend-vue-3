<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/fetching_logo.png" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/fetch-mounted">Fetch Mounted</RouterLink>
        <RouterLink to="/fetch-created">Fetch Created</RouterLink>
        <RouterLink to="/fetch-watch">Fetch Watch</RouterLink>
        <RouterLink to="/fetch-computed">Fetch Computed</RouterLink>
        <RouterLink to="/fetch-setup">Fetch Setup</RouterLink>
        <RouterLink to="/fetch-vue-query">Fetch Vue Query</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
  nav {
    flex-direction: column;
    align-items: center;
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.logo {
  display: block;
  margin: 0 auto;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;

  nav {
    display: flex;
    gap: 20px;
    margin-top: 10px;

    a {
      text-decoration: none;
      color: #42b983;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
