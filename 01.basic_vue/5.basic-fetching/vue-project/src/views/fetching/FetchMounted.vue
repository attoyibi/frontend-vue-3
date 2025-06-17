<template>
  <div>
    <h1>Belajar Fetch di Mounted</h1>

    <p>
      <a
        href="https://github.com/attoyibi/frontend-vue-3/blob/main/01.basic_vue/5.basic-fetching/vue-project/src/views/fetching/FetchMounted.vue"
        target="_blank"
      >
        🔗 Lihat kode sumber di GitHub
      </a>
    </p>

    <p v-if="isLoading">Memuat data postingan...</p>
    <p v-else-if="error" style="color: red">Terjadi kesalahan: {{ error }}</p>

    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong> - User ID {{ post.userId }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const isLoading = ref(true)
const error = ref(null)

async function fetchPosts() {
  isLoading.value = true
  error.value = null

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    posts.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})

// onMounted(async () => {
//   isLoading.value = true
//   error.value = null

//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     posts.value = data
//   } catch (err) {
//     error.value = err.message
//   } finally {
//     isLoading.value = false
//   }
// })
</script>

<style scoped>
body {
  font-family: sans-serif;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

a {
  color: blue;
  text-decoration: underline;
  margin-bottom: 20px;
  display: inline-block;
}

li {
  margin-bottom: 10px;
}
</style>
