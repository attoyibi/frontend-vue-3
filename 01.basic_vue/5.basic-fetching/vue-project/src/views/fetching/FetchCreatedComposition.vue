<template>
  <div>
    <h1>Daftar Pengguna (Composition API)</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
    </ul>
    <p v-else-if="isLoading">Memuat pengguna...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const error = ref(null)
const isLoading = ref(true)

const fetchUsers = async () => {
  isLoading.value = true
  error.value = null
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = response.data
  } catch (err) {
    error.value = 'Gagal memuat data pengguna. Silakan coba lagi nanti.'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchUsers)
</script>

<style lang="scss" scoped>
/* Tambahkan style jika perlu */
</style>
