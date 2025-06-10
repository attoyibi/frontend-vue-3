<script setup lang="ts">
import { reactive, ref } from 'vue'

const posts = reactive(["Post 1", "Post 2"])

function loadMore() {
  const myNewPosts = ["Post 3", "Post 4", "Post 5"]

  //1. tidak bisa langsung di ganti valuenya
  // ❌ Ini salah:
  // posts = myNewPosts;
  //2. cara yang benar ketika menggunakna reactive
  // ✅ Solusi: Mutasi isi array, bukan referensinya
  // posts.splice(0, posts.length, ...myNewPosts)
  // 3. cara mengkosongkan reactive dan memasukkan value baru
  //   console.log(posts)
  //   posts.length = 0;
  //   posts.push("Post 3", "Post 4", "Post 5");
}

</script>

<template>
  <section>
    <PageHeading>Replacing Reactive State 1</PageHeading>
    <ul>
      <li v-for="post in posts" :key="post">
        {{ post }}
      </li>
    </ul>
    <button @click="loadMore">Load More</button>
    {{ posts.length }}
  </section>
</template>

<style scoped>
section {
  @apply w-80 mx-auto text-3xl mt-10;
}

button {
  @apply bg-blue-500 text-white px-4 py-2 rounded-md;
}
</style>
