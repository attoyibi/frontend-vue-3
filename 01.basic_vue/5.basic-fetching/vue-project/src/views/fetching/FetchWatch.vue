<template>
  <div>
    <h2>Cari Pengguna</h2>
    <input type="text" v-model="searchTerm" placeholder="Ketik nama pengguna..." />

    <div v-if="isLoading">Memuat hasil...</div>
    <div v-else-if="error">Terjadi kesalahan: {{ error }}</div>
    <ul v-else-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
    <p v-else>Tidak ada hasil ditemukan.</p>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import axios from 'axios'; // Pastikan Anda sudah menginstal axios: npm install axios

const searchTerm = ref('');
const users = ref([]);
const isLoading = ref(false);
const error = ref(null);
let searchTimeout = null; // Untuk menyimpan referensi timer debounce

// Fungsi untuk melakukan pencarian API
const performSearch = async (query) => {
  if (!query) {
    users.value = [];
    return;
  }

  isLoading.value = true;
  error.value = null;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${query}`);
    users.value = response.data;
  } catch (err) {
    error.value = err.message || 'Gagal mengambil data.';
  } finally {
    isLoading.value = false;
  }
};

// Menggunakan watch untuk memantau perubahan searchTerm
watch(searchTerm, (newVal) => {
  // 1. Hapus timeout sebelumnya jika ada
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  // 2. Set timeout baru
  searchTimeout = setTimeout(() => {
    console.log(`Mencari untuk: ${newVal}`);
    performSearch(newVal);
  }, 500); // Tunda pencarian selama 500ms
});

// Penting: Bersihkan timeout saat komponen dihancurkan
onUnmounted(() => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
});
</script>

<style scoped>
/* Opsional: Gaya CSS untuk contoh */
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
}
</style>