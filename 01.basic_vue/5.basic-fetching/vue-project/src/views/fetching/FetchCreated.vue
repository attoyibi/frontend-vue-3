<template>
  <div>
    <h1>Daftar Pengguna</h1>
    <p>
      <a href="https://github.com/attoyibi/frontend-vue-3/blob/main/01.basic_vue/5.basic-fetching/vue-project/src/views/fetching/FetchCreated.vue" 
       target="_blank">
      Lihat kode sumber di GitHub
      </a>
    </p>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
    <p v-else>Memuat pengguna...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'; // Pastikan Anda sudah menginstal axios: npm install axios

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      error: null,
    };
  },
  async created() {
    console.log('Komponen dibuat (created hook dipanggil)');
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.users = response.data;
    } catch (error) {
      console.error('Gagal mengambil data pengguna:', error);
      this.error = 'Gagal memuat data pengguna. Silakan coba lagi nanti.';
    }
  },
  // Contoh lifecycle hooks lainnya (tidak relevan dengan created, hanya untuk perbandingan)
  mounted() {
    console.log('Komponen sudah di-mount ke DOM (mounted hook dipanggil)');
    // Di sini Anda bisa memanipulasi DOM jika diperlukan
  }
};
</script>

<style scoped>
/* Gaya CSS opsional */
</style>