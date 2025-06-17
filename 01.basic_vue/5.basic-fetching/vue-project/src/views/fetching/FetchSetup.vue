<template>
  <div class="user-profile">
    <h1>Fetch Setup</h1>
    <h2>Profil Pengguna</h2>

    <div v-if="isLoading" class="loading-state">
      <p>Memuat data profil Anda...</p>
    </div>

    <div v-else-if="error" class="error-state">
      <p>Terjadi kesalahan saat memuat profil: {{ error }}</p>
      <button @click="fetchUserData" class="retry-button">Coba Lagi</button>
    </div>

    <div v-else-if="user">
      <div class="profile-card">
        <div class="avatar-section">
          <img :src="user.avatar || 'https://via.placeholder.com/150?text=No+Avatar'" alt="User Avatar" class="user-avatar">
        </div>
        <div class="info-section">
          <h2>{{ user.firstName }} {{ user.lastName }}</h2>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Jenis Kelamin:</strong> {{ user.gender === 'male' ? 'Pria' : 'Wanita' }}</p>
          <p><strong>Tanggal Lahir:</strong> {{ user.birthDate }}</p>
          <p><strong>Alamat:</strong> {{ user.address?.address }}, {{ user.address?.city }}</p>
          <p><strong>Telepon:</strong> {{ user.phone }}</p>
          </div>
      </div>
      <p class="last-login">Terakhir diperbarui: {{ lastFetchedTime }}</p>
    </div>

    <div v-else class="empty-state">
      <p>Data profil tidak tersedia. Silakan coba login kembali.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// --- State Reaktif ---
const user = ref(null); // Akan menyimpan objek data pengguna
const isLoading = ref(true); // Indikator loading
const error = ref(null); // Menyimpan pesan error
const lastFetchedTime = ref(''); // Untuk menunjukkan kapan data terakhir diambil

// --- Fungsi Pengambilan Data (Asinkron) ---
const fetchUserData = async () => {
  isLoading.value = true;
  error.value = null;
  user.value = null; // Reset user data
  lastFetchedTime.value = '';

  try {
    // --- Simulasi Token Autentikasi ---
    // Dalam aplikasi nyata, ini akan diambil dari localStorage, Vuex/Pinia, dll.
    const authToken = localStorage.getItem('auth_token_example') || 'your-dummy-auth-token';
    if (!authToken || authToken === 'your-dummy-auth-token') {
      throw new Error('Token autentikasi tidak ditemukan. Harap login kembali.');
    }

    // Menggunakan DummyJSON API untuk data pengguna
    // URL: https://dummyjson.com/users/1 (misalnya ambil user dengan ID 1)
    const response = await fetch('https://dummyjson.com/users/1', {
      headers: {
        'Authorization': `Bearer ${authToken}`, // Mengirim token di header
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // Tangani error HTTP seperti 401 Unauthorized, 404 Not Found, dll.
      if (response.status === 401) {
        throw new Error('Sesi kedaluwarsa atau tidak sah. Harap login kembali.');
      }
      throw new Error(`Gagal memuat profil: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    user.value = data; // Simpan data pengguna ke state
    lastFetchedTime.value = new Date().toLocaleString(); // Update waktu terakhir diambil

  } catch (err) {
    console.error('Terjadi kesalahan saat mengambil data pengguna:', err);
    error.value = err.message;
    // Opsi: Redirect ke halaman login jika error adalah karena token tidak valid
    // import { useRouter } from 'vue-router';
    // const router = useRouter();
    // if (err.message.includes('login kembali')) {
    //   router.push('/login');
    // }
  } finally {
    isLoading.value = false;
  }
};

// --- Lifecycle Hook: Panggil fetchUserData() saat komponen dimount ---
onMounted(() => {
  console.log('UserProfile komponen dimount. Memulai pengambilan data pengguna...');
  // Simulasikan token sudah ada setelah login
  localStorage.setItem('auth_token_example', 'valid-jwt-token-12345');
  fetchUserData();
});
</script>

<style scoped>
.user-profile {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.5em;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.loading-state, .empty-state {
  text-align: center;
  padding: 50px;
  font-size: 1.2em;
  color: #7f8c8d;
}

.error-state {
  text-align: center;
  padding: 40px;
  background-color: #fcebeb;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  color: #e74c3c;
  font-size: 1.1em;
}

.error-state .retry-button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.error-state .retry-button:hover {
  background-color: #2980b9;
}

.profile-card {
  display: flex;
  flex-direction: column; /* Default for smaller screens */
  gap: 30px;
  align-items: center; /* Center items for column layout */
  padding: 20px;
  background-color: #f9fbfd;
  border-radius: 10px;
  border: 1px solid #e9f0f7;
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.03);
}

@media (min-width: 600px) {
  .profile-card {
    flex-direction: row; /* Row for wider screens */
    align-items: flex-start; /* Align top for row layout */
  }
}

.avatar-section {
  flex-shrink: 0; /* Prevent avatar from shrinking */
  padding: 10px; /* Space around avatar */
}

.user-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3498db;
  box-shadow: 0 0 15px rgba(52, 152, 219, 0.4);
}

.info-section {
  flex-grow: 1; /* Allow info section to take available space */
  text-align: center; /* Default for smaller screens */
}

@media (min-width: 600px) {
  .info-section {
    text-align: left; /* Align left for wider screens */
  }
}

.info-section h2 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 10px;
}

.info-section p {
  margin: 8px 0;
  color: #555;
  font-size: 1.05em;
}

.info-section p strong {
  color: #333;
}

.last-login {
  text-align: right;
  font-size: 0.9em;
  color: #888;
  margin-top: 20px;
}
</style>